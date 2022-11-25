import { Request, Response } from "express";

import { IDeliveryman } from "../../../../interfaces/IDeliverman";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const { username, password }: IDeliveryman = request.body;

    const result = await createDeliverymanUseCase.execute({username,password});

    return response.json(result)
  }
}