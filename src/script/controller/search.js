const header = document.querySelector('website-header').shadowRoot;
header.addEventListener('click',function(e){
    if(e.target.parentElement.classList.contains('search-btn-side')){
        const keyword = header.querySelector('.search-text-side').value.toLowerCase();
        generateResult(keyword);
    }else if(e.target.parentElement.classList.contains('search-btn')){
        const keyword = header.querySelector('.search-text').value.toLowerCase();
        generateResult(keyword);
    }
})

function getPosts(){
    return fetch('/src/data/Posts.json')
        .then(response => response.json())
        .then(response => response);   
}

async function generateResult(keyword){
    const posts = await getPosts();
    let output = "";

    posts.forEach(post => {
        const name = post.title;
        if(name.toLowerCase().includes(keyword)){
            output += `
            <div class="post">
                <img src="${post.img}" alt="image">
                <p class="image-title">${post.title}</p>
                <a class="view" href="${post.link}">View</a>
            </div>
            `
        }
    });

    localStorage.setItem('output',output)
    window.open('/search.html','_self');
}
