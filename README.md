# Server-Side Session Authentication System

> **"A robust backend authentication system built with Node.js, emphasizing server-side state management and middleware processing pipelines."**

[Read this in Korean / 한국어 버전으로 읽기](./README_KR.md)

---

## 📌 Project Overview
This project implements the core principles of User Authentication and Stateful Session Management in a web environment.
As an aspiring server developer, I focused on building a secure "Request Pre-processing Pipeline" and ensuring reliable data synchronization between the MySQL database, server memory, and client-side cookies.

## 🚀 Key Features
* **Middleware Pipeline Architecture**: Designed a structured pre-processing flow using `express.json()` and `express-session`.
* **Secure Session Handling**: Implemented a server-side session store with `HttpOnly` and `Secret Signing` to mitigate XSS and unauthorized tampering.
* **Relational Database Integration**: Real-time user credential validation and session mapping using MySQL.
* **Full Auth Lifecycle**: Comprehensive implementation of Login, Session-based Access Control (Dashboard), and Logout (Session destruction & Cookie clearing).

## 🛠 Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** Express.js
* **Database:** MySQL
* **Libraries:** `express-session`, `dotenv`

## 🏗 System Architecture
I approached the `req` (Request) object as a dynamic workspace. 
Every request passes through a "pre-processing factory" where session data is injected before it reaches the business logic.

## 🔧 Troubleshooting & Lessons Learned
* Session Initialization: Fixed a critical crash by ensuring the session middleware is declared before any routers, preventing `undefined` property access.
* Async Data Fetching: Optimized the frontend login/logout flow by correctly utilizing `await response.json()` to handle asynchronous HTTP responses.

## 🤖 AI Collaboration Disclosure
This project was developed with the assistance of Google Gemini as a collaborative pair-programming partner. 
* Role of AI: Assisted in debugging middleware order issues, explaining the internal logic of `express-session`, and optimizing asynchronous `fetch` operations.
* Human Input: System architecture design, database schema definition, and final logic verification were conducted manually to ensure a deep understanding of the backend flow.

---