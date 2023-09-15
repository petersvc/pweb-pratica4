///<reference path="cliente.ts"/>
class Clientes {
    constructor() {
        this._clientes = [];
    }
    get clientes() {
        return this._clientes;
    }
    set clientes(clientes) {
        this._clientes = clientes;
    }
    inserir(cliente) {
        this._clientes.push(cliente);
        return `Cliente ${cliente.nome} inserido com sucesso!`;
    }
    remover(cpf) {
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
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find((cliente) => cliente.cpf === cpf);
    }
}
