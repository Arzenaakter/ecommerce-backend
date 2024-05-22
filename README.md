## Project Overview

This project is an E-commerce API developed using Express and TypeScript, integrating MongoDB with Mongoose for effective data management. Data integrity is ensured through validation using Zod. The API allows for product and order management, providing endpoints to create, retrieve, update, and delete products and orders, as well as searching for products and managing inventory.

## ** Features **

Product Management

- Create a new product
- Retrieve a list of all products
- Retrieve a specific product by ID
- Update product information
- Delete a product
- Search products

**Order Management**

- Create a new order
- Retrieve all orders
- Retrieve orders by user email
- Update inventory based on order creation

## Setup and Installation

- Clone the Repository

* git clone https://github.com/Arzenaakter/ecommerce-backend
* cd ecommerce-backend

## Install Dependencies

- Using npm:
  npm install

* Using yarn:
  npm install

## Environment Variables

- Create a .env file in the root directory and add the following variables:
  MONGO_URI=mongodb://localhost:27017/ecommerce
  PORT=3000

  ## Start the Server

  - Using npm:
    npm run dev

  * Using yarn:
    yarn dev

    The server will start on http://localhost:3000.

## API Endpoints

** Product Management **

- Create a New Product
  Endpoint: /api/products
  Method: POST

* Retrieve All Products
  Endpoint: /api/products
  Method: GET

- Retrieve a Specific Product by ID
  Endpoint: /api/products/:productId
  Method: GET
- Update Product Information
  Endpoint: /api/products/:productId
  Method: PUT

* Delete a Product
  Endpoint: /api/products/:productId
  Method: DELETE

* Search a Product
  Endpoint: /api/products?searchTerm=iphone
  Method: GET

** Order Management **

- Create a New Order
  Endpoint: /api/orders
  Method: POST

- Retrieve All Orders
  Endpoint: /api/orders
  Method: GET

* Retrieve Orders by User Email
  Endpoint: /api/orders?email=level2@programming-hero.com
  Method: GET

  live server: https://ecommerce-backend-chi-six.vercel.app/
