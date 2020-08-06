let recentPosts = document.querySelector('.recent-posts');
document.addEventListener('DOMContentLoaded',async function(){
    const posts = await getPosts();
    recentPosts.innerHTML = ""
    posts.forEach(post => {
        recentPosts.innerHTML += `
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