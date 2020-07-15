const header = document.querySelector('website-header').shadowRoot;
header.addEventListener('click',async function(e){
    if(e.target.parentElement.classList.contains('search-btn-side')){
        const keyword = header.querySelector('.search-text-side').value.toLowerCase();
        const players = await getPlayer();
        let output = "";

        players.forEach(player => {
            const name = player.name;
            if(name.toLowerCase().includes(keyword)){
                output += `
                <div class="card">
                    <img src="${player.avatar}" alt="avatar">
                    <h3>${player.name}</h3>
                    <button type="button" name="${player.name}" class="btn btn-primary btn-sm show-detail" name style="width:40%;margin-bottom:1rem">Detail</button>
                </div>
                `
            }
        });

        localStorage.setItem('output',output)
        window.open('/search.html','_self');
    
    }else if(e.target.parentElement.classList.contains('search-btn')){
        const keyword = header.querySelector('.search-text').value.toLowerCase();
        const players = await getPlayer();
        let output = "";

        players.forEach(player => {
            const name = player.name;
            if(name.toLowerCase().includes(keyword)){
                output += `
                <div class="card">
                    <img src="${player.avatar}" alt="avatar">
                    <h3>${player.name}</h3>
                    <button type="button" name="${player.name}" class="btn btn-primary btn-sm show-detail" name style="width:40%;margin-bottom:1rem">Detail</button>
                </div>
                `
            }
        });

        localStorage.setItem('output',output);
        window.open('/search.html','_self');
    }
})

async function getPlayer(){
    return fetch("/src/data/Player.json")
        .then(response => response.json())
        .then(responseJson => responseJson)
}
// header.addEventListener('click', async function(e){
//     if(e.target.parentElement.classList.contains('search-btn-side')){
//         const keyword = header.querySelector('.search-text-side').value.toLowerCase();
//         const players = await getPlayer();
//         let output = "";

//         players.forEach(player => {
//             const name = player.name;
//             if(name.toLowerCase().includes(keyword)){
//                 output += `
//                 <div class="card">
//                     <img src="${player.avatar}" alt="avatar">
//                     <h3>${player.name}</h3>
//                     <button type="button" name="${player.name}" class="btn btn-primary btn-sm show-detail" name style="width:40%;margin-bottom:1rem">Detail</button>
//                 </div>
//                 `
//             }
//         });

//         localStorage.setItem('output',output)
//         window.open('/search.html','_self');
    
//     }else if(e.target.parentElement.classList.contains('search-btn')){
//         const keyword = header.querySelector('.search-text').value.toLowerCase();
//         const players = await getPlayer();
//         let output = "";

//         players.forEach(player => {
//             const name = player.name;
//             if(name.toLowerCase().includes(keyword)){
//                 output += `
//                 <div class="card">
//                     <img src="${player.avatar}" alt="avatar">
//                     <h3>${player.name}</h3>
//                     <button type="button" name="${player.name}" class="btn btn-primary btn-sm show-detail" name style="width:40%;margin-bottom:1rem">Detail</button>
//                 </div>
//                 `
//             }
//         });

//         localStorage.setItem('output',output);
//         window.open('/search.html','_self');
//     }
// })

// async function getPlayer(){
//     return fetch("/data/Player.json")
//      .then(response => response.json())
//      .then(responseJson => responseJson)
// }