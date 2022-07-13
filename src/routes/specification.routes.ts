import {  Router } from 'express'; 
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import {createSpecificationController} from '../modules/cars/useCases/createSpecification'

const specificationsRoute = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoute.post("/", (request, response) => {
   return createSpecificationController.handle(request, response);

})

export {specificationsRoute}