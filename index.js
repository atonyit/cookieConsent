const modalEl = document.getElementById('modal')

const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modalEl.style.display = 'inline'
 }, 1500) //1.5 seconds

 modalCloseBtn.addEventListener("click", function(){
    modalEl.style.display = 'none'
 })

 consentForm.addEventListener("submit", function(e){
    e.preventDefault()
    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading"></img>
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
      </div>`
    
 })

 modalText.addEventListener()
