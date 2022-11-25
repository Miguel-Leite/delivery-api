import { hash } from "bcrypt";

import { prismaClient } from "../../../../database/prismaClient";
import { IDeliveryman } from "../../../../interfaces/IDeliverman";


export class CreateDeliverymanUseCase {
  async execute({username, password}: IDeliveryman) {
    const deliverymanExists = await prismaClient.deliverymans.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prismaClient.deliverymans.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return deliveryman; 
  }
}