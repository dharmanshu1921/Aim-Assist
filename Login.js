const username = document.querySelector('#username')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const errorEle = document.querySelector('#error')
form.addEventListener('submit',(e)=>{
  let messages = []
  if(username.value==='' || username.value==null)
  {
    messages.push('1. Name is Required')
    errorEle.style.display = "flex"
    errorEle.style.justifyContent = "center"
    errorEle.style.alignItems = "center"
    errorEle.style.fontSize = "1rem"
    errorEle.style.backgroundColor = "#EB455F"
    errorEle.style.fontFamily = "Montserrat,sans-serif"

  }
  if(password.value.length <=6)
  {
    messages.push("2. Password must be longer than 6 characters.")
  }
  if (password.value.search(/[a-z]/i) < 0) {
    messages.push("3. Your password must contain at least one letter.");
  }
  if (password.value.search(/[0-9]/) < 0) {
    messages.push("4. Your password must contain at least one digit."); 
  }
  if(messages.length>0)
  {
  e.preventDefault()
  errorEle.innerText = messages.join('\n')
  }
})