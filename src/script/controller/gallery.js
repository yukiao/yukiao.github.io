let gallery = document.querySelector('.gallery');
document.addEventListener('DOMContentLoaded',async function(){
    const posts = await getPosts();
    posts.sort(function(a,b){
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    gallery.innerHTML = ""
    posts.forEach(post => {
        gallery.innerHTML += `
            <div class="post">
                <img src="${post.img}" alt="image">
                <p class="image-title">${post.title}</p>
                <a class="view" href="${post.link}">View</a>
            </div>
        `
    });
})

function getPosts(){
    return fetch('/src/data/Posts.json')
        .then(response => response.json())
        .then(responseJson => responseJson)
}