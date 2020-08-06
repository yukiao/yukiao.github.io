class Header extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM  = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="/src/style/style.css">
        <link rel="stylesheet" href="/src/style/font-awesome-4.7.0/css/font-awesome.min.css">
        <style>
            header{
                display: flex;
                align-items: center;
                background-color: #202020;
                padding: 20px;
                border-bottom-left-radius:5px;
                border-bottom-right-radius:5px;
                position: fixed;
                left:0;
                right:0;
                z-index:2;
                height:10vh;
                box-sizing: border-box;
            }
            a{
                text-decoration: none;
                color: rgb(0, 89, 255);
                font-weight: bolder;
            }
            a:hover{
                color:white;
            }
            .title{
                flex: 3;
            }

            .title h1{
                font-family: 'Merienda One', sans-serif;
                color: rgb(0,89,255);
            }
            .navigation{
                display: flex;
                flex:2;
                margin-left: auto;
                justify-content: space-evenly;
            }
            li{
                list-style: none;
                margin-right: 10px;
            }
            .separator{
                height:3px;
                width:100%;
                background-color: rgb(0,89,255);
            }
            .search-box{
                flex:1.2;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                align-self: center;

            }
            .search-text{
                margin-right: 15px;
                background: transparent;
                border: 2px solid rgb(0,89,255);
                border-radius: 40px;
                height:25px;
                outline: 0;
                padding: 0 10px;
                width:150px;
                color: white;
            }
            .search-btn{
                font-size: 1.3em
            }

            .hamburger{
                display: none;
            }
            .sidebar-navigation{
                display: none;
            }

            @media only screen and (max-width: 768px){
                header{
                    display: flex;
                    justify-content: center;
                    z-index:2;
                }
                .navigation{
                    display: none;
                }
                .search-box{
                    display: none;
                }
                .title h1{
                    text-align: center;
                }
                .hamburger{
                    display: flex;
                    flex-direction: column;
                    align-self: center;
                    justify-self: end;
                    cursor: pointer;
                }
                .line{
                    width:30px;
                    height:5px;
                    border-radius:10px ;
                    color: rgb(0, 89, 255);
                    display: inline-block;
                    margin-bottom: 3px;
                    background-color: rgb(0, 89, 255);
                }
                .sidebar-navigation{
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    background-color: #202020;
                    right: 0;
                    left:0;
                    top: 10vh;
                    bottom: 0;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100vw;
                    transform: translateX(100%);
                    opacity: 0;
                    transition: .5s;
                    height:90vh;
                    border-bottom-left-radius: 10px;
                    z-index: 1;
                    overflow-y: auto;
                }
                .search-text-side{
                    margin-right: 15px;
                    background: transparent;
                    border: 2px solid rgb(0,89,255);
                    border-radius: 40px;
                    height:25px;
                    outline: 0;
                    padding: 0 10px;
                    width:150px;
                    color: white;
                }
                .search-btn-side{
                    font-size: 1.3em
                }

                .sidebar-navigation-show{
                    transition: .5s;
                    opacity: 1;
                    transform: translateX(0);
                }
                .sidebar-navigation :first-child{
                    display:flex;
                    width: 80%;
                    align-items:center;
                    justify-content:center
                }
                li{
                    margin:0
                }
            }

        </style>
        <header>
            <div class="title">
                <h1>Yukiao</h1>
            </div>
            <ul class="navigation">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/gallery.html">Gallery</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div class="search-box">
                <input type="text" class="search-text" placeholder="Search image ...">
                <a class="search-btn" href="#">
                <i class="fa fa-search original"></i>
                </a>
            </div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </header>
        <ul class="sidebar-navigation">
            <li>
                <input type="text" class="search-text-side" placeholder="Search image ...">
                <a class="search-btn-side" href="#">
                    <i class="fa fa-search side"></i>
                </a>
            </li>
            <div class="separator"></div>
            <li><a href="/index.html">Home</a></li>
            <div class="separator"></div>
            <li><a href="/gallery.html">Gallery</a></li>
            <div class="separator"></div>
            <li><a href="#">Contact</a></li>
            <div class="separator"></div>
            <li><a href="#">About</a></li>
        </ul>
        `
    }
}

customElements.define('website-header',Header)