# Extintores - Backend project

Backend project for the Extintores app. This application shows a public list of extinguishers. The logged user can create new ones and delete or update extinguishers created by him.

Follow the link to access the front repository: https://github.com/isdi-coders-2023/Marc-Moreno-Final-Project-front-202304-bcn

## Scripts

---

`npm run build`: compiles the app's source code

`npm run start`: starts the app

`npm run test`: runs tests

## Tech Stack

---

### **Server**

🔸Node (https://nodejs.org/en)  
🔸Express (https://expressjs.com/)  
<br>

### **DDBB**

🔸MongoDB Atlas (https://www.mongodb.com/docs/)  
<br>

### **API**

🔸Render (https://render.com/docs)  
<br>

### **Languages**

🔸Typescript (https://www.typescriptlang.org/docs/)  
<br>

### **Good Practices Tools**

🔸Husky hooks (https://typicode.github.io/husky/#/)  
🔸Eslint (https://eslint.org/)  
🔸Code formatter Prettier (https://prettier.io/)  
🔸Editorconfig  
🔸SonarCloud (https://www.sonarsource.com/products/sonarcloud/)  
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)

### **Testing**

🔸React Testing Library (https://testing-library.com/)  
🔸Jest (https://jestjs.io/)  
🔸Mock Service Worker (https://mswjs.io/)  
🔸MongoDB Memory Server (https://www.npmjs.com/package/mongodb-memory-server)  
🔸Supertest (https://www.npmjs.com/package/supertest)  
🔸Fishery (https://github.com/thoughtbot/fishery)  
🔸Faker-js (https://fakerjs.dev/)

---

<br>

## Endpoints

<br>

### **GET /ping**

<br>

- Method: GET

- Dev URL: http://localhost:4000/ping

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/ping

- Response: Status 200, {
  "message": "🏓 Pong"
  }

<br>

### **POST /user/login**

<br>

- Method: POST

- Dev URL: http://localhost:4000/user/login

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/user/login

- Request body: {"username": admin, "password": admin}

- Response: Status 200, {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU4MTUyOTMsImV4cCI6MTcxMTczNTI5M30.Cltnky--TuDPTu6bdhbC_xJPGVNtAar1mfdrTMlIiXo"
  }

<br>

### **GET /extinguishers**

<br>

- Method: GET

- Dev URL: http://localhost:4000/extinguishers

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/extinguishers

- Response: Status 200, { extinguishers: []}

---

### **DELETE /extinguishers/:id**

<br>

- Method: DELETE

- Dev URL: http://localhost:4000/extinguishers/:id

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/extinguishers/:id

- Response: Status 200, { message: "Extinguisher deleted" }

---

### **CREATE /extinguishers/:id**

<br>

- Method: POST

- Dev URL: http://localhost:4000/extinguishers/

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/extinguishers/

- Request body: {
  "brand": "H3R Performance",
  "model": "MX250B",
  "class": ["A", "B"],
  "img": "https://cdn.discordapp.com/attachments/1115063176153804870/1116305879864721408/6-_H3R_Performance_-_MX250B.webp",
  "usefulLife": "10 años",
  "fireExtinguishingAgent": "Halon 1211",
  "description": "El extintor H3R Performance MX250B utiliza Halon 1211 para extinguir incendios de Clase A y B. Es ideal para vehículos de motor, embarcaciones y áreas donde se requiere una respuesta rápida.",
  "disadvantages": "El agente Halon 1211 ha sido prohibido en muchos países debido a su impacto ambiental y efectos negativos en la capa de ozono. Además, el extintor puede ser costoso en comparación con otras opciones disponibles.",
  "strengths": "El extintor H3R Performance MX250B ofrece una respuesta rápida y eficaz en incendios de vehículos y embarcaciones. Su tamaño compacto y diseño de montaje facilitan su instalación en espacios limitados.",
  "user": "647f46ac0d057eb27cc93b77"
  }

- Response: Status 200, { message: "Extinguisher created" }

---

### **GET /extinguishers/:id**

<br>

- Method: GET

- Dev URL: http://localhost:4000/extinguishers/648a0efbe5bd51cd1605f6d2

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/extinguishers/648a0efbe5bd51cd1605f6d2

- Response: Status 200, {
  "extinguisher": {
  "brand": "Buckeye",
  "model": "13315",
  "class": [
  "A",
  "B"
  ],
  "img": "https://cdn.discordapp.com/attachments/1115063176153804870/1115063327295553586/5-EXT2.5ABC_8.webp",
  "description": "El extintor Buckeye 13315 es adecuado para incendios de Clase A y B. Es una opción versátil para hogares, oficinas y entornos comerciales.",
  "disadvantages": "El polvo químico seco puede causar contaminación y requerir limpieza adicional después de su uso. Además, el extintor puede ser pesado y voluminoso para algunas personas.",
  "strengths": "El extintor Buckeye 13315 tiene una capacidad de extinción efectiva para incendios comunes en hogares y oficinas. Su diseño robusto y duradero garantiza un rendimiento confiable durante su vida útil.",
  "user": "647f46ac0d057eb27cc93b77",
  "fireExtinguishingAgent": "Polvo químico seco",
  "usefulLife": "12 años",
  "id": "647f47000d057eb27cc93b79"
  }
  }

---

### **PUT /extinguishers/:id**

<br>

- Method: GET

- Dev URL: http://localhost:4000/extinguishers/648a0efbe5bd51cd1605f6d2

- Prod URL: https://marc-moreno-final-project-back-202304-bcn.onrender.com/extinguishers/648a0efbe5bd51cd1605f6d2

- Request body: {
  "extinguisher": {
  "brand": "Buckeye",
  "model": "13315",
  "class": [
  "A",
  "B"
  ],
  "img": "https://cdn.discordapp.com/attachments/1115063176153804870/1115063327295553586/5-EXT2.5ABC_8.webp",
  "description": "El extintor Buckeye 13315 es adecuado para incendios de Clase A y B. Es una opción versátil para hogares, oficinas y entornos comerciales.",
  "disadvantages": "El polvo químico seco puede causar contaminación y requerir limpieza adicional después de su uso. Además, el extintor puede ser pesado y voluminoso para algunas personas.",
  "strengths": "El extintor Buckeye 13315 tiene una capacidad de extinción efectiva para incendios comunes en hogares y oficinas. Su diseño robusto y duradero garantiza un rendimiento confiable durante su vida útil.",
  "user": "647f46ac0d057eb27cc93b77",
  "fireExtinguishingAgent": "Polvo químico seco",
  "usefulLife": "12 años",
  "id": "647f47000d057eb27cc93b79"
  }
  }

- Response: Status 200, {
  "extinguisher": {
  "brand": "Buckeye",
  "model": "13315",
  "class": [
  "A",
  "B"
  ],
  "img": "https://cdn.discordapp.com/attachments/1115063176153804870/1115063327295553586/5-EXT2.5ABC_8.webp",
  "description": "El extintor Buckeye 13315 es adecuado para incendios de Clase A y B. Es una opción versátil para hogares, oficinas y entornos comerciales.",
  "disadvantages": "El polvo químico seco puede causar contaminación y requerir limpieza adicional después de su uso. Además, el extintor puede ser pesado y voluminoso para algunas personas.",
  "strengths": "El extintor Buckeye 13315 tiene una capacidad de extinción efectiva para incendios comunes en hogares y oficinas. Su diseño robusto y duradero garantiza un rendimiento confiable durante su vida útil.",
  "user": "647f46ac0d057eb27cc93b77",
  "fireExtinguishingAgent": "Polvo químico seco",
  "usefulLife": "12 años",
  "id": "647f47000d057eb27cc93b79"
  }
  }

---
