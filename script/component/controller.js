const toogle = document.querySelector('.hamburger');
toogle.addEventListener('click',function(){
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('sidebar')
})

document.addEventListener('click',function(e){
    if(e.target.classList.contains('fas')){
        const keyword = document.querySelector('.search-text').value;
        console.log(keyword);
    }
})