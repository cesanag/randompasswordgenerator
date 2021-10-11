let generate = document.getElementById('generate')
let password = document.getElementById('password')

generate.addEventListener('click', function() {
  const returnRandom = (number) => {
    const value = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z',1,2,3,4,5,6,7,8,9,0]
    return value[Math.floor(Math.random() * number)]}
  
  const returnPassword = () => {
    const newPassword = []
    for (let i = 0; i < 10; i++) {
      newPassword.push(returnRandom(31))}
    return newPassword}
  
  let generatePassword = returnPassword().join("")
    returnRandom(2)
    password.value = generatePassword
    password.classList.remove('pass-button-clicked')
})

password.addEventListener('click', function() {
    password.classList.add('pass-button-clicked')
    password.select();
    document.execCommand("copy");
    password.value = "Copied"
    

})






