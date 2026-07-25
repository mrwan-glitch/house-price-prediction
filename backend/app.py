from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model.pkl")


class HouseData(BaseModel):
    carpet_area_sqft: float
    floor_num: float
    Bathroom: float
    Balcony: float
    location_grouped: str
    Furnishing: str
    Transaction: str
    Ownership: str
    facing: str


@app.get("/")
def home():
    return {"message": "House Price Prediction API is Running"}


@app.post("/predict")
def predict(data: HouseData):
    df = pd.DataFrame([data.model_dump()])

    prediction = model.predict(df)

    return {
        "Predicted Price": float(prediction[0])
    }