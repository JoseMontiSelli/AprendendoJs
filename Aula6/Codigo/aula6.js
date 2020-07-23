//ATALHOS DE SELETORES
function selectId(id)
    {return document.getElementById(id);}
//Teste de vazio
function empty(input)
    {return input.value.trim() === "";}
//Mensagem de erro
function mensagemDeErro(aMensagem)
    {errorListUl.innerHTML += "<li>" + aMensagem + "</li>"}

//variaveis
var form = selectId('formulario');
var nome = selectId('nome');
var email = selectId('email')
var senha = selectId('senha')
var mensagem = selectId('text-area')
var errorListUl = document.querySelector('#error-list ul');

//Ao clicar em enviar
form.addEventListener("submit", function(evento) {
    var listaErros = [];
    //Limpando erros
    errorListUl.innerHTML = "";
    //Lista de erros
    if(empty(nome))
        {listaErros.push(mensagemDeErro("Campo + <b>nome</b> não preenchido"));}
    if (empty(email))
        {listErros.push(mensagemDeErro("Campo <b>Email</b> não foi preenchido"))}
    if(empty(senha))
        {listaErros.push(mensagemDeErro("Campo <b>senha</b> não foi preenchido"))}
    if (empty(mensagem))
        {erros.push(mensagemDeErro("Campo <b>Mensagem</b> não foi preenchido"))}
    //Cancelando envio do formulário caso exista alguma lista de erros
    if(erros.length > 0)
        {evento.preventDefault();}
});



