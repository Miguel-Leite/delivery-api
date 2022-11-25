import { prismaClient } from "../../../../database/prismaClient";
import { ICreateDelivery } from "../../../../interfaces/ICreateDelivery";


export class CreateDeliveryUseCase {
  async execute({item_name, id_client}: ICreateDelivery) {
    const delivery = await prismaClient.deliveries.create({
      data: {
        item_name,
        id_client,
      }
    })

    return delivery;
  }
}