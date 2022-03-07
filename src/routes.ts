import { Router } from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const authenticateClientController = new AuthenticateClientController()
const createClientController = new CreateClientController()

const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliverymanController = new CreateDeliverymanController()

routes.post('/clients/auth', authenticateClientController.handle)
routes.post('/clients', createClientController.handle)

routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)
routes.post('/deliveryman', deliverymanController.handle)

export { routes }
