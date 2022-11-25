import { Request, Response } from "express";
import { ICreateClient } from "../../../../interfaces/ICreateClient";
import { CreateClientUseCase } from "./CreateClientUseCase";


export class CreateClientController {
  async handle(request: Request, response: Response) {

    const createClientUseCase = new CreateClientUseCase();
    const { username, password }: ICreateClient = request.body;

    const result = await createClientUseCase.execute({username,password});

    return response.json(result)
  }
}