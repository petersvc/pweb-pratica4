///<reference path="../model/cliente.ts"/>
///<reference path="../app.ts"/>
class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);

        clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }

    listar() {
        clientes.listar().forEach(
            (cliente: any) => {
                this.inserirContaNoHTML(cliente);
            }
        );
    }

    inserirContaNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
