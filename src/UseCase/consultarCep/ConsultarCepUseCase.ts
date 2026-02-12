import { ICepProvedor } from "../../provedores/ICepProvedor";
import { IConsultarCepDTO } from "./ConsultarCepDTO";

export class ConsultarCepUseCase{
    constructor(
        private cepProvedor: ICepProvedor
    ){}

    async execute(data: IConsultarCepDTO){
        const result = await this.cepProvedor.consultarCep(data.numeroCep);
        if(!result){
            return {
                success: false,
                msg: "Cep não encontrado",
                data:[]
            }
        }
        return {
            success: true,
            msg: "Consulta realizada com sucesso.",
            data: result
        }
    }
}