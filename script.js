
// VALIDAÇÃO NOME
document.getElementById("nome").oninput = function(){
let nome = this.value
let erro = document.getElementById("erroNome")
if(nome.length < 3){
erro.innerHTML="O nome deve ter pelo menos 3 caracteres."
}else{
erro.innerHTML="✓ Nome válido"
erro.className="sucesso"
}
}
// VALIDAÇÃO EMAIL
document.getElementById("email").oninput = function(){
let email = this.value
let erro = document.getElementById("erroEmail")
let regex = /\S+@\S+\.\S+/
if(!regex.test(email)){
erro.innerHTML="Digite um e-mail válido."
}else{
erro.innerHTML="✓ E-mail válido"
erro.className="sucesso"
}
}
// MÁSCARA TELEFONE
document.getElementById("telefone").addEventListener("input", function(){
let telefone = this.value.replace(/\D/g,"")
telefone = telefone.replace(/^(\d{2})(\d)/g,"($1) $2")
telefone = telefone.replace(/(\d{5})(\d)/,"$1-$2")
this.value = telefone
})
// VALIDAÇÃO MENSAGEM
document.getElementById("mensagem").oninput = function(){
let msg = this.value
let erro = document.getElementById("erroMensagem")
if(msg.length < 10){
erro.innerHTML="A mensagem deve ter pelo menos 10 caracteres."
}else{
erro.innerHTML="✓ Mensagem válida"
erro.className="sucesso"
}
}
// ENVIO DO FORMULÁRIO
document.getElementById("formContato").onsubmit = function(e){
e.preventDefault()
let termos = document.getElementById("termos").checked
if(!termos){
document.getElementById("erroTermos").innerHTML="Você precisa aceitar os termos."
return
}
alert("Dados enviados com sucesso e campos limpos!")
&nbsp;
// após envio,limpa o formulário
document.getElementById("formContato").reset()
}
