

let nome = document.querySelector('#nome')

let validNome = false

let usuario = document.querySelector('#usuario')

let validUsuario = false

let senha = document.querySelector('#senha')

let validSenha = false





function cadastrar(){
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
  listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
  )
    
  localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
  msgSuccess.setAttribute('style', 'display: block')
  msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
  msgError.setAttribute('style', 'display: none')
  msgError.innerHTML = ''
    
  setTimeout(()=>{
      window.location.href = 'http://projetocodecraft.vercel.app/'
  }, 2000)
  
    
} 

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
