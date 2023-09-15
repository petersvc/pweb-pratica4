///<reference path="model/clientes.ts"/>
///<reference path="controller/cliente-controller.ts"/>
let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cliente1 = new Cliente('João', '122');
cliente1.conta = c1;
const cliente2 = new Cliente('Maria', '123');
cliente2.conta = p1;
const cliente3 = new Cliente('Luana', '124');
cliente3.conta = cb1;
const clientes = new Clientes();
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);
console.log(clientes.listar());
console.log(clientes.remover('124'));
console.log(clientes.pesquisar('123'));
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
