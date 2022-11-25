import { prismaClient } from "../../../../database/prismaClient";


export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prismaClient.deliveries.findMany({
      where: {
        end_at: null
      }
    })

    return deliveries;
  }
}