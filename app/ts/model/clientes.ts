///<reference path="cliente.ts"/>
class Clientes {
    private _clientes: Cliente[];

    constructor() {
        this._clientes = [];
    }

    get clientes(): Cliente[] {
        return this._clientes;
    }

    set clientes(clientes: Cliente[]) {
        this._clientes = clientes;
    }
    inserir(cliente: Cliente): string {
        this._clientes.push(cliente);
        return `Cliente ${cliente.nome} inserido com sucesso!`;
    }

    remover(cpf: string): string {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this._clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                const nomeDoCliente = this._clientes[indiceCliente].nome;
                this._clientes.splice(indiceCliente, 1);
                return `Cliente ${nomeDoCliente} removido com sucesso!`;
            }
        }
    }

    listar(): Cliente[] {
        return this._clientes;
    }

    pesquisar(cpf: string) {
        return this._clientes.find(
            (cliente: { cpf: string; }) => cliente.cpf === cpf
        );

    }
}