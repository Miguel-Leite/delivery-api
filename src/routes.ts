import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";


const routes = Router();

routes.post('/client/authenticate', new AuthenticateClientController().handle);
routes.post('/deliveryman/authenticate', new AuthenticateDeliverymanController().handle);

routes.post('/client', new CreateClientController().handle);
routes.post('/deliveryman', new CreateDeliverymanController().handle);

export { routes };