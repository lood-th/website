class toggleButton{
    constructor(){
        this.switchedOn = false;
        this.label = document.createElement("label");
        this.switch = document.createElement("input");
        this.slider = document.createElement("span");
    }
    createToggle(){
        let la = this.label;
        let sw = this.switch;
        let sl = this.slider;
        sw.setAttribute("type", "checkbox");
        la.appendChild(sw);
        la.appendChild(sl);
        la.classList.add("toggle-frame");
    }
}

export default toggleButton;
// TODO: the whole magic, css 
