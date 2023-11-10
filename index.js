

const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');
let selecetRating = '';


ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener('click',(event)=>{
        removeActive();
        selecetRating =
        event.target.innerText || event.target.parentNode.innerText;
      event.target.classList.add('active');
      event.target.parentNode.classList.add('active');
    })
})

btnEl.addEventListener('click',() =>{
    if(selecetRating !==''){
        containerEl.innerHTML =`
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selecetRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>

        `
       

    }
})
function removeActive(){
    ratingEls.forEach((ratingEll)=>{
        ratingEll.classList.remove('active');
    })
}