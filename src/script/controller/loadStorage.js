document.addEventListener('DOMContentLoaded',function(){
    let data = localStorage.getItem('output');
    document.querySelector('.result').innerHTML = data;
    localStorage.clear();
})