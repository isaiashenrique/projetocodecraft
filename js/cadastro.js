$(document).ready(function(){
    $('body').on('focus', '#tel', function(){
        var maskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {
            onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);

                if(field[0].value.length >= 14){
                    var val = field[0].value.replace(/\D/g, '');
                    if(/\d\d(\d)\1{7,8}/.test(val)){
                        field[0].value = '';
                        alert('Telefone Invalido');
                    }
                }
            }
        };
        $(this).mask(maskBehavior, options);
    });
});

$(document).ready(function(){
    $('body').on('focus', '#phone', function(){
        var maskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 0000-0000' : '(00) 0000-0000';
        },
        options = {
            onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);

                if(field[0].value.length >= 14){
                    var val = field[0].value.replace(/\D/g, '');
                    if(/\d\d(\d)\1{7,8}/.test(val)){
                        field[0].value = '';
                        alert('Telefone Invalido');
                    }
                }
            }
        };
        $(this).mask(maskBehavior, options);
    });
});




function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }



 // permitindo apenas letras campo usuario 

 $('#nome').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
});

$('#nome_materno').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
});



$('#usuario').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
  });


// permição apenas letras senha 

$('#senha').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
});


$('#confirmar_senha').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
});


// validação confirmar senha 

let senha = document.getElementById('senha');
let senhaC = document.getElementById('confirmar_senha');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);

 


// validação cep 




// cep automático 

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};



 