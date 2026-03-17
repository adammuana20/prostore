## 🛒 Fullstack E-commerce Platform (Next.js)

A production-ready fullstack e-commerce application built to simulate real-world online store workflows built with modern web technologies. This project demonstrates real-world features such as authentication, payments, admin dashboards, and scalable architecture.

## 🚀 Live Demo
👉 [https://prostore-iota-five.vercel.app/](https://prostore-iota-five.vercel.app/)

## 📌 Overview

This application allows users to browse products, add items to cart, and securely complete purchases. It also includes an admin dashboard for managing products, orders, and viewing analytics.

## 🧰 Tech Stack

Frontend

Next.js (App Router, Server Components)

React

TypeScript

Tailwind CSS / shadcn/ui


Backend & Database

PostgreSQL

Prisma ORM

Next.js Server Actions / API Routes


Authentication

NextAuth (JWT, Sessions, OAuth)


Payments & Services

Stripe

PayPal

Resend (Transactional Emails)


Forms & Validation

React Hook Form

Zod


Testing & Tooling

Jest

ESLint


Deployment

Vercel


## ✨ Features

### 🛍️ User Features

Browse and search products

Add to cart and manage cart items

Secure checkout with Stripe & PayPal

Authentication (login/signup with OAuth)

Order history tracking


## 🛠️ Admin Features

Dashboard with sales analytics (Recharts)

Product management (CRUD)

Order management

User management


## 🧠 Key Highlights

Built using Next.js App Router with server components for improved performance

Implemented secure authentication and role-based authorization

Integrated multiple payment gateways (Stripe & PayPal)

Designed scalable database schema using Prisma ORM

Built robust form validation using React Hook Form + Zod

Added transactional email support using Resend

Ensured code quality with Jest testing and ESLint

## ⚙️ Key Technical Decisions
- Used Next.js App Router for improved performance and server-side rendering
- Chose Prisma ORM for type-safe database access
- Implemented dual payment gateways (Stripe & PayPal) for flexibility


## 📸 Screenshots

### Homepage
![Homepage 1](/images/screenshots/homepage-1)
![Homepage 2](/images/screenshots/homepage-2)

### Product Page
![Product Page 1](/images/screenshots/product-page-1)
![Product Page 2](/images/screenshots/product-page-2)

### Checkout Flow
![Checkout 1](/images/screenshots/checkout-1)
![Checkout 2](/images/screenshots/checkout-2)
![Checkout 3](/images/screenshots/checkout-3)
![Checkout 4](/images/screenshots/checkout-4)

### Admin Dashboard
![Admin Dashboard 1](/images/screenshots/admin-dashboard-1)
![Admin Dashboard 2](/images/screenshots/admin-dashboard-2)
![Admin Dashboard 3](/images/screenshots/admin-dashboard-3)


⚙️ Installation & Setup
# Clone the repository
git clone [https://github.com/adammuana20/prostore.git](https://github.com/adammuana20/prostore.git)

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Setup environment variables
Create a .env file and add the following:

DATABASE_URL=

NEXTAUTH_SECRET=

NEXTAUTH_URL=

STRIPE_SECRET_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

PAYPAL_CLIENT_ID=

RESEND_API_KEY=


# Run development server

npm run dev


🧪 Testing

npm run test


## 📦 Deployment

Deployed on Vercel with environment-based configuration.


## 📈 What I Learned

Building scalable fullstack applications using Next.js App Router

Implementing secure authentication and authorization flows

Integrating third-party services like Stripe, PayPal, and Resend

Designing relational databases with Prisma and PostgreSQL

Writing maintainable and testable code using Jest


## 👤 Author

Adam Clint Muaña

Frontend / Fullstack Developer

Portfolio: https://adam-muana.netlify.app

GitHub: https://github.com/adammuana20
