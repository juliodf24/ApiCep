export class Cep{
    public cep: string;
    public tipoCep: string;
    public subTipoCep: string;
    public uf: string;
    public cidade: string;
    public bairro: string;
    public endereco: string;
    public complemento: string | null;
    public codigoIBGE: string | null;

    constructor(props: Cep){
        Object.assign(this, props);
    }
}

