let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    batatas.push(produto);
    document.getElementById("lista").innerHTML = batatas;

}
function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){
    alert("o nome que você digitou não foi encontrado.")}
    else{
    batatas.splice(posicao, 1);
    document.getElementById("lista").innerHTML = batatas;
    }
}