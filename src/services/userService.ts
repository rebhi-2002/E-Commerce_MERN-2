import userModel, { IUser } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exists!", statusCode: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 10); // saltOrRounds: 10 => The salt to be used in encryption. If specified as a number then a salt will be generated with the specified number of rounds and used.
  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 }; // return { data: generateJWT(newUser), statusCode: 200 };
};

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "Incorrect email or password!", statusCode: 400 }; // User not found!
  }

  // const passwordMatch = password === findUser.password;
  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (passwordMatch) {
    return {
      data: generateJWT({
        email,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
      }),
      statusCode: 200,
    }; // return { data: findUser, statusCode: 200 };
  }

  return { data: "Incorrect email or password!", statusCode: 400 };
};

const generateJWT = (data: any) => {
  return jwt.sign(data, "bJnEogbzWrvxeNRuLGV0LOMPYsUK7Pd8"); // (data, "SecretKey", {expiresIn: "24h"});
};
