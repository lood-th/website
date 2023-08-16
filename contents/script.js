const buttons = Array.from(document.getElementsByClassName(`button`)); 

console.log(buttons);

const makeAppear = (arr) => {
    arr.forEach(elem => {
        setTimeout(() => {
            elem.classList.add(`vis`);
         }, 500);
    });
     
 
}

makeAppear(buttons);

