import { prismaClient } from "../../../../../database/prismaClient";
import { IUpdateDeliveryman } from "../../../../../interfaces/IUpdateDeliveryman";


export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    
    const result = await prismaClient.deliveries.update({
      where: {
        id: id_delivery
      },
      data:{
        id_deliveryman
      }
    });

    return result;
  }
}