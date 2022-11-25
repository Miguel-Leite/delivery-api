import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";


const routes = Router();

routes.post('/authenticate', new AuthenticateClientController().handle);

routes.post('/clients', new CreateClientController().handle);

export { routes };