//const titulo = document.querySelector('h1');
//typeWriter(titulo);
typeWriter(document.querySelector('h1'));

function typeWriter(el){
    const text = el.innerHTML.split(''); // ".split('')" separa cada palavra como um elemento do array.
    el.innerHTML = '';
    text.forEach((letra, i) => {
        setTimeout(function(){
            el.innerHTML += letra;
        }, 75 * i)
    });
}