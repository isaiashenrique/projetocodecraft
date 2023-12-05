function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href ="inicial.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}


// permitindo apenas letras campo usuario 



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