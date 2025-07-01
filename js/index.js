// recupero il riferimento al form
const form = document.getElementById('main-form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
})

// proviamo ad azionare il modale automaticamente raggiunto un certo livello di
// scroll della pagina
// recupero un riferimento alla window e collego l'event listener

const mioModale = new bootstrap.Modal(document.getElementById('exampleModal'))
// mioModale ora è una rappresentazione in JS del modale di bootstrap

window.addEventListener('scroll', (e) => {
  console.log('SCROLLATA LA PAGINA', window.scrollY)
  // se window.scrollY arriva più o meno sui 2500 sono arrivato al punto della pagina
  // in cui voglio azionare il modale
  if (window.scrollY > 2500) {
    // recupero il modale nascosto
    // X ANNA
    // mioModale.show() // questa capacità show/hide deriva da bootstrap
  }
})

// ------------

// colleghiamo i pulsanti 1-2-3-4 alle prima 4 card dei gatti della seconda row
// prima di tutto, recupero i riferimenti ai 4 bottoni
const allTheCatButtons = document.querySelectorAll('.cat-button')
const allTheCatCards = document.querySelectorAll('.cat-card')

// bottone "1"
// allTheCatButtons[0].addEventListener('click', () => {
//   // nascondiamo la prima card
//   allTheCatCards[0].classList.toggle('invisible')
// })

// facciamolo per tutti i bottoni
// for
// for (let i = 0; i < allTheCatButtons.length; i++) {
//   allTheCatButtons[i].addEventListener('click', () => {
//     // nascondiamo la prima card
//     allTheCatCards[i].classList.toggle('invisible')
//   })
// }

// forEach
allTheCatButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    // allTheCatCards[i].classList.toggle('invisible')
    // creiamo le pills "NEW"
    const pill = document.createElement('span') // <span></span>
    pill.innerText = 'NEW' // <span>NEW</span>
    pill.classList.add(
      'position-absolute',
      'top-0',
      'start-100',
      'translate-middle',
      'badge',
      'rounded-pill',
      'bg-danger',
      'z-3'
    )
    // ora appendiamo la pill alla cat-card corrispondente
    allTheCatCards[i].appendChild(pill)
  })
})
