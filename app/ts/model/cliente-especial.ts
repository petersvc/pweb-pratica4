class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;
    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this._dependentes = new Array<Cliente>();
    }
    get dependentes() {
        return this._dependentes;
    }

    set dependentes(dependentes) {
        this._dependentes = dependentes;
    }
}
