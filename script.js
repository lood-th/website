
const makeAppear = () => {
    setTimeout(() => {
    let emailButton = document.getElementById(`email`);
       emailButton.classList.add(`vis`);
    }, 500);
}

makeAppear();
