# Product Ranking Node Project

This project is aimed at providing functionality for product ranking. It allows fetching product data and details, including currency specification, and provides options for fetching products based on popularity.

## Features

- **Fetch Single Product:**
  - **Step 1:** Fetch products without specifying currency.
  - **Step 2:** Fetch product details and specify currency.

- **Fetch All Products:**
  - **Option 1:** Fetch all products with the most views.
  - **Option 2:** Fetch all products with the most views and specified currency.

## Installation

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Set up your environment variables by creating a `.env` file in the root directory with the following variables:



## Usage

## env

```
USER_NAME=
PASSWORD=
DB_NAME=
DB_HOST=
NODE_ENV=
CURRENCY_EXCHANGE_KEY=
```

After installation and environment variable setup, you can use the following commands to interact with the project:

- **Start the Application:**
```bash
npm run dev


## API Endpoint

The API endpoint for this project is 
`/api/v1/product/:id`.
`/api/v1/products/all`
