

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let senha = document.querySelector('#senha')
  
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
      }
      
    }
})
   
  
  window.location.href = 'inicial.html'
    
  let mathRandom = Math.random().toString(16).substr(2)
  let token = mathRandom + mathRandom
    
  localStorage.setItem('token', token)
  localStorage.setItem('userLogado', JSON.stringify(userValid))
} 
  







