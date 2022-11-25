import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../database/prismaClient";
import { IDeliveryman } from "../../../interfaces/IDeliverman";


export class AuthenticateDeliverymanUseCase {
  async execute ({username, password}:  IDeliveryman) {
    const deliveryman = await prismaClient.deliverymans.findFirst({
      where: {
        username,
      }
    })

    if (!deliveryman) {
      console.log("oi")
      throw new Error("Username or password invalid.");
    }
    
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    const token = sign({username}, `${process.env.JWT_DELIVERYMAN_SECRET}`, {
      subject: deliveryman.id,
      expiresIn: "1d"
    });

    return token;
  }
}