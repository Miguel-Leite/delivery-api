import { Request, Response } from "express";
import { IDeliveryman } from "../../../interfaces/IDeliverman";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password }: IDeliveryman = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({username,password});

    return response.json({
      code: "success",
      data: result
    });
  }
}