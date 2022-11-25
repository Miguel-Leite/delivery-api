import { Request, Response } from "express";

import { IClient } from "../../../interfaces/IClient";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password }: IClient = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();

    const result = await authenticateClientUseCase.execute({username,password});

    return response.json({
      code: "success",
      data: result
    });
  }
}