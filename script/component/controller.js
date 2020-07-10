const toogle = document.querySelector('.hamburger');
toogle.addEventListener('click',function(){
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('sidebar')
})

//hovered search bar

let windowSize = window.innerWidth;

document.addEventListener('click',function(e){
    if(e.target.classList.contains('fa-search')){
        if(!(e.target.classList.contains('clicked'))){
            e.target.classList.add('clicked');
        }
        if(e.target.classList.contains('clicked')){
            // const keyword = document.querySelector('.search-text').value;
            // console.log(keyword);
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.classList.add('modal-container-show');
            const modalBox = document.querySelector('.modal');
            modalBox.classList.add('modal-show');

            const close = document.getElementById('close');
            close.addEventListener('click',function(){
                modalBox.classList.remove('modal-show');
                modalContainer.classList.remove('modal-container-show');
                // modalContainer.style.display = "none"
            })
        }
    }
})
// document.addEventListener('click',function(e){
//     if(e.target.classList.contains('fas')){
//         // const keyword = document.querySelector('.search-text').value;
//         // console.log(keyword);
//         // var newWindow = window.open('/text.html','_self');
//         // newWindow.onload = function(){
//         //     var heading = newWindow.document.querySelector('h1');
//         //     heading.innerHTML = `OK`;
//         // }

//         var windowSize = window.innerWidth;

//         console.log(windowSize);
//     }
// })

// Collapse navbar
let prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    const header = document.querySelector('header');
    if(prevScrollpos < currentScrollPos){
        header.classList.add('collapseHeader');
    }else{
        header.classList.remove('collapseHeader');
    }
    prevScrollpos = currentScrollPos;
}

//hovered search button
