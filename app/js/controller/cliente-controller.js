///<reference path="../model/cliente.ts"/>
///<reference path="../app.ts"/>
class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }
    listar() {
        clientes.listar().forEach((cliente) => {
            this.inserirContaNoHTML(cliente);
        });
    }
    inserirContaNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
