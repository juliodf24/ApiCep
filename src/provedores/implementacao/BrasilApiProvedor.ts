import { Cep } from "../../entidades/Cep";
import { ICepProvedor } from "../ICepProvedor";

export class BrasilApiProvedor implements ICepProvedor {
    async consultarCep(numeroCep: string): Promise<Cep | null> {

        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${numeroCep}`);

        if (!response.ok) {
            return null;
        }
        interface IBrasilApiCep {
            cep: string,
            state: string,
            city: string,
            neighborhood: string,
            street: string,
            service: string
        }

        const data = await response.json() as IBrasilApiCep;

        return new Cep({
            cep: data.cep,
            tipoCep: "logradouro",
            subTipoCep: "D",
            uf: data.state,
            cidade: data.city,
            bairro: data.neighborhood,
            endereco: data.street,
            complemento: "",
            codigoIBGE: ""
        });
    }
}
