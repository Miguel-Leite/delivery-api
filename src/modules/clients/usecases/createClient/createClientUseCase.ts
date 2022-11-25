import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";
import { ICreateClient } from "../../../../interfaces/ICreateClient";

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {

    const clientExists = await prismaClient.clients.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return client; 
    
  }
}