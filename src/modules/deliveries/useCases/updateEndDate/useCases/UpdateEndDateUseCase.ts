import { prismaClient } from "../../../../../database/prismaClient";
import { IUpdateEndDate } from "../../../../../interfaces/IUpdateEndDate";



export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
    
    const result = await prismaClient.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data:{
        end_at: new Date(),
      }
    });

    return result;
  }
}