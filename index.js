const modalEl = document.getElementById('modal')

const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

setTimeout(function(){
    modalEl.style.display = 'inline'
 }, 1500) //1.5 seconds

 modalCloseBtn.addEventListener("click", function(){
    modalEl.style.display = 'none'
 })

 consentForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log('form submitted')
 })
