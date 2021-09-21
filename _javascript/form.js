// ajax cep inicio
let logradouro = document.getElementById('logradouro');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

function preencherEndereco(obj){
    logradouro.value = obj.logradouro;
    bairro.value = obj.bairro;
    cidade.value = obj.localidade;
    estado.value = obj.uf;
}

function limparEndereco(){
    logradouro.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}


let cepInput = document.getElementById('cep');

cepInput.addEventListener('focusout', () => {
    let cep = cepInput.value;
    let regexCep = /^[0-9]{8}$/;
    let cepTexto = document.getElementById('cep-texto')

    if (!regexCep.test(cep)){
        if(cepTexto.classList.contains('d-none')) {
            cepTexto.classList.remove('d-none');
        }
    } else {
        if(!cepTexto.classList.contains('d-none')) {
            cepTexto.classList.add('d-none');
        }
            let url = `https://viacep.com.br/ws/${cep}/json/`;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){ //requisicao finalizada
                if (xhr.status == 200) { //requisicao bem-sucedida
                    let resposta = xhr.responseText;
                    console.log(resposta);
                    let obj = JSON.parse(resposta);
                    if (obj.erro == true){
                        window.alert('Este CEP não existe');
                        limparEndereco();
                    } else {
                        preencherEndereco(obj);
                    }
                }
            }
            }
        }
    }
)


// ajax cep fim

//validacao form inicio

//valida nome inicio
let inputNome = document.getElementById('nome');
function validaNome(){
    let regexNome = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    let nomeTexto = document.getElementById('nome-texto');
    if(!regexNome.test(inputNome.value)){
        if(nomeTexto.classList.contains('d-none')){
            nomeTexto.classList.remove('d-none')
        }
        return false
    } else {
        if(!nomeTexto.classList.contains('d-none')){
            nomeTexto.classList.add('d-none');
        }
        return true
    }
}
inputNome.addEventListener('blur', validaNome);
//valida nome fim

//valida cpf inicio
let inputCpf = document.getElementById('cpf');
function validaCpf(){
    let regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    let cpfTexto = document.getElementById('cpf-texto');
    if(!regexCpf.test(inputCpf.value)){
        if(cpfTexto.classList.contains('d-none')){
            cpfTexto.classList.remove('d-none')
        }
        return false
    } else {
        if(!cpfTexto.classList.contains('d-none')){
            cpfTexto.classList.add('d-none');
        }
        return true
    }
}
inputCpf.addEventListener('blur', validaCpf);
//valida cpf fim

//valida telefone inicio
let inputTelefone = document.getElementById('telefone');
function validaTelefone(){
    let regexTelefone = /^\(?\d{0,2}\)?\s?\d{4}\s?\-?\d{4}$/;
    let telefoneTexto = document.getElementById('telefone-texto');
    if(!regexTelefone.test(inputTelefone.value)){
        if(telefoneTexto.classList.contains('d-none')){
            telefoneTexto.classList.remove('d-none')
        }
        return false
    } else {
        if(!telefoneTexto.classList.contains('d-none')){
            telefoneTexto.classList.add('d-none');
        }
        return true
    }
}
inputTelefone.addEventListener('blur', validaTelefone);
//valida telefone fim

//valida celular inicio
let inputCelular = document.getElementById('celular');
function validaCelular(){
    let regexCelular = /^\(?\d{0,2}\)?\s?\d{4,5}\s?\-?\d{4}$/;
    let celularTexto = document.getElementById('celular-texto');
    if(!regexCelular.test(inputCelular.value)){
        if(celularTexto.classList.contains('d-none')){
            celularTexto.classList.remove('d-none')
        }
        return false
    } else {
        if(!celularTexto.classList.contains('d-none')){
            celularTexto.classList.add('d-none');
        }
        return true
    }
}
inputCelular.addEventListener('blur', validaCelular);

//valida celular fim

//valida endereco inicio
function validaEndereco(){
    if (logradouro.value == ""){
        return false 
    }
    return true
}

//valida endereco fim

//valida senha inicio
let inputSenha = document.getElementById('senha');
let inputConfirma = document.getElementById('senha-confirmar');

function validaSenha(){
    if (inputSenha.value != inputConfirma.value){
        window.alert('Senhas digitadas não conferem');
        return false
    } else if (inputSenha.value == '') {
        return false
    }
    return true
}
inputConfirma.addEventListener('blur', validaSenha);

//valida senha fim


let btnSubmit = document.getElementById('btn-submit');
function validarForm(){
    if(validaNome() && validaCpf() && validaTelefone() && validaCelular() && validaSenha() && validaEndereco()){
        alert('Campos validados!');
        btnSubmit.removeAttribute('disabled')
    } else {
        alert('Campos preenchidos incorretamente');
    }
}
    



//validacao form fim