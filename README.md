# Extintores - Backend project

Backend project for the Extintores app. This application shows a public list of extinguishers. The logged user can create new ones and delete or update extinguishers created by him.

Follow the link to access the front repository: https://github.com/isdi-coders-2023/Marc-Moreno-Final-Project-front-202304-bcn

## Tech Stack

---

### **Client**

🔸React  
🔸Redux  
🔸Styled-components

### **Server**

🔸Node
🔸Express

### **DDBB**

🔸MongoDB Atlas (https://www.mongodb.com/docs/)

### **API**

🔸Render (https://render.com/docs)

### **Languages**

🔸Typescript (https://www.typescriptlang.org/docs/)

### **Good Practices Tools**

🔸Husky hooks (https://typicode.github.io/husky/#/)  
🔸Eslint (https://eslint.org/)  
🔸Code formatter Prettier (https://prettier.io/)  
🔸SonarCloud (https://www.sonarsource.com/products/sonarcloud/)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)

🔸Editorconfig

### **Testing**

🔸React Testing Library (https://testing-library.com/)  
🔸Jest (https://jestjs.io/)  
🔸Mock Service Worker (https://mswjs.io/)  
🔸MongoDB Memory Server (https://www.npmjs.com/package/mongodb-memory-server)  
🔸Supertest (https://www.npmjs.com/package/supertest)

---

<br>

## Endpoints

<br>

### **GET /ping**

<br>

- Method: GET

- Dev URL: http://localhost:4000/ping

- Prod URL: https://marc-moreno-final-project-202304-bcn.netlify.app/ping

- Response: Status 200, {
  "message": "🏓 Pong"
  }

<br>

### **POST /user/login**

<br>

- Method: POST

- Dev URL: http://localhost:4000/user/login

- Prod URL: https://marc-moreno-final-project-202304-bcn.netlify.app/user/login

- Request body: {"username": admin, "password": admin}

- Response: Status 200, {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU4MTUyOTMsImV4cCI6MTcxMTczNTI5M30.Cltnky--TuDPTu6bdhbC_xJPGVNtAar1mfdrTMlIiXo"
  }

<br>

### **GET /extinguishers**

<br>

- Method: GET

- Dev URL: http://localhost:4000/extinguishers

- Prod URL: https://marc-moreno-final-project-202304-bcn.netlify.app/extinguishers

- Response: Status 200, { extinguishers: []}

---
