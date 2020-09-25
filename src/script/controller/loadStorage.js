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
    document.querySelector('.result').innerHTML = output;

}

document.addEventListener('DOMContentLoaded',function(){
    const query = {}
    
    let url = new URL(window.location.href)
    url.searchParams.forEach((value,name)=>{
        query[name] = value;
    })
    generateResult(query.keyword);
})

