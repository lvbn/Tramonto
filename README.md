# TRAMONTO
Tramonto is a sunset-inspired brand. 🌆

## Visit the website:
https://tramonto-store.netlify.app

<img width="1440" alt="Tramonto_landing" src="https://github.com/lvbn/Tramonto/assets/65773848/d2701fb3-b430-4006-b48e-29876c8f919f">

## About this project

This project is the frontend of Tramont's online shop. 

## Frontend

React + JavaScript + Context API + CSS

This project was created with `create-react-app`. Context API was used to manage states. Vanilla CSS was chosen to style the application and the CSS modules were the preferred approach.

## Features

### * Landing page:
Provides an overview of products and categories, providing the user with a starting point.
### * Products page: 
Users can browse through products. Only the price is displayed below the product image. The client's preference is to follow a highly minimalistic approach. 
### * Product details page: 
All product details are shown on this page, allowing the user to select color and size if the product offers that possibility.
### * Search for product: 
The search bar in the navigation bar looks for all the products matching a given word. All the products matching it will be displayed in the results.
### * Shopping Cart:
- The shopping cart floats to the right. 
- Is accessible anywhere in the application in order to allow the customer to keep track of it without interrupting the shopping flow, increasing sales and providing a better user experience. 
- It is also resizable for the convenience of the user's screen.
### * Payment Page: 
Stripe provides a checkout page, where the total value can be checked before choosing a payment method and proceeding to payment.

## Responsiveness

This project is mobile responsive. It works well on 390px wide screens. On other screens, it might not fit perfectly yet.

| landing page | products | product | shopping cart |
| --- | --- | --- | --- |
| ![IMG_6786795D94EA-1](https://github.com/lvbn/Tramonto/assets/65773848/9bb4efd6-2b2c-475e-8dd2-80cbdf78520b)  |  ![IMG_0607](https://github.com/lvbn/Tramonto/assets/65773848/dca76899-37a5-47e8-a38a-a248fa079979) | ![IMG_0608](https://github.com/lvbn/Tramonto/assets/65773848/e0e38c66-9817-4fff-bb7b-32f48054b29a) | ![IMG_0609](https://github.com/lvbn/Tramonto/assets/65773848/a79efd09-f354-4144-a620-f5184d94b077) |


## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

