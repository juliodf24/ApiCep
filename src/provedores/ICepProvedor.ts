import { Cep } from "../entidades/Cep";

export interface ICepProvedor{
    consultarCep(numeroCep: string): Promise<Cep | null>
}