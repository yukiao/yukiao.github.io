class Header extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM  = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="style/css/all.css">
        <link rel="stylesheet" href="style/style.css">
        <style>
            header{
                display: flex;
                align-items: center;
                background-color: #212121;
                padding: 20px;
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
                margin-right: 10px
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
                    background-color: #212121;
                    height: 100vh;
                    right: 0;
                    top: 40px;
                    z-index: -1;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 50vw;
                    transform: translateX(100%);
                    opacity: 0;
                    transition: .5s;
                }

                .sidebar-navigation-show{
                    transition: .5s;
                    opacity: 1;
                    transform: translateX(0);
                }
                .sidebar-navigation :first-child{
                    display:flex;
                    width: 80%;
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div class="search-box">
                <input type="text" class="search-text" placeholder="Search image ...">
                <a class="search-btn" href="#">
                <i class="fas fa-search"></i>
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
                <input type="text" class="search-text" placeholder="Search image ...">
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
        `
    }
}

customElements.define('website-header',Header)