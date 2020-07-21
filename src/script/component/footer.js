class Footer extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="src/style/style.css">
            <style>
                footer{
                    background-color: #202020;
                    display:flex;
                    justify-content: center;
                    height:80px;
                    align-items: center;
                    border-top-left-radius:5px;
                    border-top-right-radius:5px;
                    height: 10vh;
                }
                footer p{
                    color: rgb(0,89,255);
                    font-weight:bolder;
                }
            </style>
            <footer>
                <p>Copyright &copy; 2020 Yukiao. All Rights Reserved</p>
            </footer>
        `
    }
}

customElements.define('website-footer',Footer);