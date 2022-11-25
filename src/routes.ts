import { Router } from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";


const routes = Router();

routes.post('/clients', new CreateClientController().handle);

export { routes };