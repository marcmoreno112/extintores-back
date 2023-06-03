# **Endpoints**

## GET /ping

- <u>Method:</u> GET

- <u>Dev URL:</u> http://localhost:4000/ping

- <u>Prod URL:</u> https://marc-moreno-final-project-202304-bcn.netlify.app/ping

- <u>Response:</u> Status 200, {
  "message": "🏓 Pong"
  }

---

## POST /user/login

- <u>Method:</u> POST

- <u>Dev URL:</u> http://localhost:4000/user/login

- <u>Prod URL:</u> https://marc-moreno-final-project-202304-bcn.netlify.app/user/login

- <u>Request body</u>: {"username": admin, "password": admin}

- <u>Response</u>: Status 200, {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU4MTUyOTMsImV4cCI6MTcxMTczNTI5M30.Cltnky--TuDPTu6bdhbC_xJPGVNtAar1mfdrTMlIiXo"
  }

---

## GET /extinguishers

- <u>Method:</u> GET

- <u>Dev URL:</u> http://localhost:4000/extinguishers

- <u>Prod URL:</u> https://marc-moreno-final-project-202304-bcn.netlify.app/extinguishers

- <u>Response</u>: Status 200, { extinguishers: []}

---

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Marc-Moreno-Final-Project-back-202304-bcn)
