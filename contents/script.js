// import toggleButton from './toggleButton';

let emailButton = document.querySelector(`#email-button`); 

const makeAppear = (elem) => {
     setTimeout(() => {
        elem.classList.add(`vis`);
     }, 500);
 
}

makeAppear(emailButton);

/* let weatherDisplay = document.querySelector('#weather-display');
fetch('')
.then(response => {
    weatherDisplay.innerHTML = `<p>${response}</p>`;
})
.catch(
    err => {weatherDisplay.innerHTML = `<p>${err}</p>`;}
); */
