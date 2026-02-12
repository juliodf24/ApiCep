import { Request, Response } from 'express';
import { z } from "zod";
import { ConsultarCepUseCase } from './ConsultarCepUseCase';


export class ConsultarCepController {
    constructor(
        private consultarCepUseCase: ConsultarCepUseCase
    ){}
    async handle(request: Request, response: Response): Promise<Response> {
        const consultarCepSchema = z.object({
            numerocep: z.string().regex(/^\d{8}$/, 'CEP deve conter exatamente 8 dígitos')
        });
        const result = consultarCepSchema.safeParse(request.params);

        if (!result.success) {
            return response.status(400).json({
                success: false,
                msg: "cep invalido",
                data:[]
            });
        }
        const data = consultarCepSchema.parse(request.params)

        try {
            const resultadoConsulta = await this.consultarCepUseCase.execute({numeroCep: data.numerocep})
            if(resultadoConsulta.success){
                return response.status(200).json(resultadoConsulta);
            } else {
                return response.status(404).json(resultadoConsulta);
            }
            
        } catch (error) {
            return response.status(400).json({
                success: false,
                msg: "erro ao processar a requisição",
                data:[]
            })
        }
    
  }
}
