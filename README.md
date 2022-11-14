# Virtual Store

## Problem Domain
  An online storefront that will allow our users to browse my product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase. Using React, Redux, and Material UI to create this application. 

  This goal of this application is to apply knowledge of React and Redux as well as utilize Material UI library to design the UI of the storefront. Data will be stored in a Deployed API with MongoDB and superagent will be used to perform API requests. 

  Jest will be utilized with TDD and the deployed site is linked **[here!]()**

## Run this Application Locally
  - npm i redux, react-redux redux-devtools-extension MaterialUI react-if jest


## Core Functionality
  - Display a list of product catergories
  - Dispaly a listing of products from each category upon selecting a category
  - A product list that reveals a full detail page and ability to add each product to a shopping cart
  - Shopping cart will be visible on screen
  - Full shopping chart and checkout screen available from main navigation

## UML
![UML]()

## Application Phases
  - Phase 1: Application Setup
      - Basic React Application
      - Redux State Management
      - State managed in memory
      - Material UI Components & Styling
  - Phase 2: Shopping Cart
      - Add items to a shopping cart
      - Update quantities in the cart & calculate a total cost
      - Remove items from the cart
      - Show the cart in real-time on the UI
  - Phase 3: Live Data
      - Connect the application a live API
      - Persist changes to products based on cart activity.
  - Phase 4: Checkout & Detail Pages
      - Add a routing tool to navigate to home page and product details pages
      - Refactor the store to use Redux middleware
      - pattern (Redux Toolkit)
      - Connect to deployed API and make requests to the API for product data and information
  - Phase 5: 
    - Refactoring Redux store with Redux Toolkit 
    - Add a cart checkout page
      - Cart page will have summary of checkout items
    - Add a product details page