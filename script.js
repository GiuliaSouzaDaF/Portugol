function executar1008(){
    let id, horas, valorHora, salario 
    // let id
    // let valorHora
    // let salario
    id = Number(prompt("digite seu id: "));
    // id = Number('45');
    // id = 45
    horas = Number(prompt("quantas horas voce trabalhou?"));
    valorHora = Number(prompt("quanto voce ganha por hora?"));
    
    salario = horas * valorHora 
    alert("ID: "+ id + "\nsalario: R$"+salario.toFixed(2));

}
function executar1009(){
    // comissao = vendas * 15/100 
    let nome, salarioFixo,totalVendas, comissao, totalReceber
    nome = (prompt("digite o nome do vendedor"));
    salarioFixo = Number(prompt("digite seu salario fixo: "));
    totalVendas = Number(prompt("digite o total de vendas no mes"));
    comissao = totalVendas*15/100
    totalReceber = comissao + salarioFixo


    alert("nome: "+nome+"\ntotalReceber: R$"+totalReceber.toFixed(2));
}
function executar1038(){
    let codigo,qtd, total
    codigo = Number(prompt("digite 1 para cachorro quente: \ndigite 2 para x-salada: \ndigite 3 para x-bacon: \ndigite 4 para torrada simples: \ndigite 5 para refrigerante: \n "));
    total
    qtd = Number(prompt("digite a quantidade de itens:"));
    if(qtd == 1){
        alert("total: R$" )
    }
    
}