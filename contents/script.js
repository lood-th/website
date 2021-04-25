
const makeAppear = (elem) => {
     setTimeout(() => {
       elem.classList.add(`vis`);
    }, 500); 
}

let emailButton = document.querySelector(`#email`); 
makeAppear(emailButton);

console.log("Rest of the script is being executed :)))")

let weatherDisplay = document.querySelector('#weather-display');
fetch('http://style.css')
.then(response => {
    weatherDisplay.innerHTML = `<p>${response}</p>`;
})
.catch(
    err => {weatherDisplay.innerHTML = `<p>${err}</p>`;}
);
