import express from "express";
import { login, register } from "../services/userService";

const router = express.Router();

router.post("/register", async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  const { statusCode, data } = await register({
    firstName,
    lastName,
    email,
    password,
  });
  response.status(statusCode).send(data);
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const { statusCode, data } = await login({ email, password });
  response.status(statusCode).send(data);
});

export default router;

// POST: http://localhost:3001/user/register
// Body => raw => JSON:
// {
//   "firstName": "Yahya",
//   "lastName": "Y",
//   "email": "ya@y.com",
//   "password": "123ddd"
// }

// POST: http://localhost:3001/user/login
// Body => raw => JSON:
// {
//   "email": "ya@y.com",
//   "password": "123ddd"
// }
