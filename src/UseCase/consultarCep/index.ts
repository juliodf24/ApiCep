import { BrasilApiProvedor } from "../../provedores/implementacao/BrasilApiProvedor";
import { ConsultarCepController } from "./ConsultarCepController";
import { ConsultarCepUseCase } from "./ConsultarCepUseCase";

const cepProvedor = new BrasilApiProvedor

const consultarCepUseCase = new ConsultarCepUseCase(cepProvedor)
const consultarCepController = new ConsultarCepController(consultarCepUseCase)

export {consultarCepController, consultarCepUseCase}