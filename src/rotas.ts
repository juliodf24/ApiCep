import { Router } from 'express';
import { consultarCepController } from './UseCase/consultarCep';


const router = Router()

router.get('/health', (request, response) => {
  return response.status(200).json({
    status: 'ok'
  });
});

router.get('/cep/:numerocep', (request, response) => {
  consultarCepController.handle(request, response);
});





export  { router }
