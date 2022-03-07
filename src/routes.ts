import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)

export { routes }
