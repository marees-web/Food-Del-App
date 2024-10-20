# Food-Del-App
Food Ordering and Delivery Application

This is a full-stack web application for ordering food and managing restaurant listings.
The app allows users to browse through available restaurants, place food orders, manage their profiles, and securely make payments. 
Restaurants can register, manage their menus, and track orders.

Features

Frontend: Built with React and TypeScript for a scalable and maintainable codebase.

Responsive Design: Tailwind CSS and Shadcn used for a modern, responsive UI.

User Authentication: Integrated Auth0 for secure user sign-up and login.

Image Upload: Cloudinary used to handle image uploads for restaurant and food item images.

Backend: Node.js with Express to manage business logic, API endpoints, and database interactions.

Database: MongoDB to store user data, orders, restaurant information, and menu items.

Payments: Stripe integrated for secure and seamless payment processing.

Restaurant Management: Users with restaurant accounts can create, update, and manage restaurant listings and menus.

Deployment: The application is hosted on Render.com, providing scalability and easy access.


Tech Stack

Frontend: React, TypeScript, Tailwind CSS, Shadcn

Backend: Node.js, Express

Database: MongoDB

Authentication: Auth0

Image Storage: Cloudinary

Payment Integration: Stripe

Deployment: Render.com

Installation

Install dependencies for both frontend and backend:

# For frontend
cd client
npm install

# For backend
cd ../server
npm install

Create a .env file in both the client and server directories with the following variables:

client .env

REACT_APP_AUTH0_DOMAIN=your-auth0-domain

REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id

REACT_APP_CLOUDINARY_URL=your-cloudinary-url

REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key

server .env

MONGODB_URI=your-mongodb-uri

CLOUDINARY_API_KEY=your-cloudinary-api-key

CLOUDINARY_API_SECRET=your-cloudinary-api-secret

STRIPE_SECRET_KEY=your-stripe-secret-key

AUTH0_DOMAIN=your-auth0-domain

AUTH0_CLIENT_ID=your-auth0-client-id

Start the development servers:

# For frontend
cd frontend
npm start

# For backend
cd backendd
npm start

Visit
https://zomato-fullstack-app-frontend.onrender.com/ 
to view the application.

Deployment
The application is deployed on Render.com. For instructions on how to deploy, refer to the Render documentation.

ScreenShots:

Home Page

![image](https://github.com/user-attachments/assets/35167c7d-95f5-4ab7-b18b-54a30393f124)

Search Option

![image](https://github.com/user-attachments/assets/f47561be-6f67-414b-b608-bb1dd8dbfa36)

Find restaurant by City

![image](https://github.com/user-attachments/assets/4fb10b66-4b59-434d-b956-981c18fb941c)

Pagination with Cuisines Filter

![image](https://github.com/user-attachments/assets/981f3d9c-8c71-4424-a8d7-4c3d642e126d)

Sort by Delivery Price

![image](https://github.com/user-attachments/assets/c332ff1d-acd9-4e50-b36f-0c1dcbaba7ce)

Sort bt delivery Time

![image](https://github.com/user-attachments/assets/d61211e3-b159-4bdd-9528-677d5f24c00b)

Active Orders Status

![image](https://github.com/user-attachments/assets/aecb88ba-ec39-4374-b335-717328b23e9f)

User Profile

![image](https://github.com/user-attachments/assets/594998be-8df8-4aba-93f7-86d62f40faf8)


Active Order Of Restaurant

![image](https://github.com/user-attachments/assets/fd923dee-373e-4abc-9251-6bfbcc0a4c3f)

Manage Restaurant

![image](https://github.com/user-attachments/assets/608143cc-038c-4d4f-be8c-cf0d84047a77)

![image](https://github.com/user-attachments/assets/e6641eb3-c859-46d6-9706-dd9363eaac6b)

Way to order Page

![image](https://github.com/user-attachments/assets/16003881-d420-4450-98ef-edeb84e6df88)

Payment Page

![image](https://github.com/user-attachments/assets/78907ce8-4f71-440e-8645-7d1185c096d9)

Order Confirmation Page

![image](https://github.com/user-attachments/assets/59c7d1dd-ab1f-4bf2-8b01-ffac2b43e2c2)















