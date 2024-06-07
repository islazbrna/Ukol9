const obsah = document.querySelector('#obsah')

console.log(obsah.innerHTML) 
console.log(document.querySelector('#email').textContent)

const email = document.querySelector('#email')

email.addEventListener('input', (e) =>  {
    console.log(Number(e.target.value.length))
    console.log(e.target.value)
    console.log(e.target.value.indexOf('@'))
    if (Number(e.target.value.length) === 0 ){
    email.classList.add('redoutline')
    }
    else if (Number(e.target.value.length) != 0){
        email.classList.remove('redoutline')
        if (e.target.value.indexOf('@') === -1){
            email.classList.add('redoutline')
        } else {
            email.classList.remove('redoutline')
        }
    }
})
 
email.addEventListener('click', (e) =>  {
    email.classList.add('redoutline')
})

document.querySelector('#obsah').addEventListener('submit', (event) => {
event.preventDefault()
return obsah.textContent='Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.'
})