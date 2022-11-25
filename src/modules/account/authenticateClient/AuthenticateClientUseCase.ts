import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../database/prismaClient";
import { IClient } from "../../../interfaces/IClient";


export class AuthenticateClientUseCase {
  async execute ({username, password}:  IClient) {
    const client = await prismaClient.clients.findFirst({
      where: {
        username,
      }
    })

    if (!client) {
      throw new Error("Username or password invalid.");
    }
    
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    const token = sign({username}, `${process.env.JWT_SECRET}`, {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}