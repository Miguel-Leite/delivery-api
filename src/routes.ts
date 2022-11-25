import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveries/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveriesDeliveryman/FindAllDeliveriesDeliverymanController";


const routes = Router();

routes.post('/client/authenticate', new AuthenticateClientController().handle);
routes.post('/deliveryman/authenticate', new AuthenticateDeliverymanController().handle);

routes.post('/client', new CreateClientController().handle);
routes.post('/deliveryman', new CreateDeliverymanController().handle);
routes.post('/delivery', ensureAuthenticateClient, new CreateDeliveryController().handle);

routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, new UpdateDeliverymanController().handle);

routes.get('/delivery/available', ensureAuthenticateDeliveryman, new FindAllAvailableController().handle);
routes.get('/client/deliveries', ensureAuthenticateClient, new FindAllDeliveriesController().handle);
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, new FindAllDeliveriesDeliverymanController().handle);

export { routes };