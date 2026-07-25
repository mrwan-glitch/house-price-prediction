# 🏠 House Price Prediction System

A Machine Learning web application that predicts house prices based on user inputs using a trained Scikit-Learn model.

---

# 📌 Project Overview

This project predicts house prices based on property features entered by the user.

The user interacts with a React web interface, which sends the input data to a FastAPI backend. The backend preprocesses the data using the same pipeline used during training before generating the predicted house price.

---

# 🚀 Technologies Used

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- Python
- FastAPI
- Uvicorn

## Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

# 📂 Project Structure

```
house_price_project/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── notebooks/
│   └── house_price_model.ipynb
│
├── .gitignore
└── README.md
```

---

# 📥 Model Inputs

The model predicts house prices using the following features:

| Feature | Type |
|----------|------|
| Location | Text |
| Carpet Area (sqft) | Number |
| Floor | Number |
| Bathroom | Number |
| Balcony | Number |
| Furnishing | Category |
| Transaction | Category |
| Status | Category |
| Facing | Category |

---

# 📤 Output

The application returns:

**Predicted House Price (Indian Rupees)**

Example:

```
Predicted Price: ₹8,500,000
```

---

# ⚙️ Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔄 Workflow

```
User
   │
   ▼
React Frontend
   │
   ▼
FastAPI Backend
   │
   ▼
Data Preprocessing
   │
   ▼
Machine Learning Model
   │
   ▼
Predicted House Price
```

---

# 📊 Machine Learning Pipeline

The prediction pipeline includes:

- Data Cleaning
- Missing Value Handling
- Feature Engineering
- StandardScaler
- OneHotEncoder
- ColumnTransformer
- Regression Model

---

# 📈 Dataset

The dataset contains real estate listings with information such as:

- Location
- Carpet Area
- Furnishing
- Bathrooms
- Balcony
- Floor
- Property Status
- Transaction Type

The dataset was cleaned and preprocessed before training the model.

---

# 👨‍💻 Author

**Marwan Mohamed**

Faculty of Computers and Information

Machine Learning Project

GitHub:
https://github.com/mrwan-glitch