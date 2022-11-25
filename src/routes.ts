import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveries/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";


const routes = Router();

routes.post('/client/authenticate', new AuthenticateClientController().handle);
routes.post('/deliveryman/authenticate', new AuthenticateDeliverymanController().handle);

routes.post('/client', new CreateClientController().handle);
routes.post('/deliveryman', new CreateDeliverymanController().handle);
routes.post('/delivery', ensureAuthenticateClient, new CreateDeliveryController().handle);

routes.get('/delivery/available', ensureAuthenticateDeliveryman, new FindAllAvailableController().handle);

export { routes };