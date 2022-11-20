import { posts } from "/data.js"


const mainEl = document.getElementById('main-container')


renderPosts()

function renderPosts(){
    let renderHtml = ""
    posts.forEach(element => {
        const displayEl = ` 
                    <div class="avatar pd">
                        <img src="${element.avatar}" alt="avatar">
                        <div class="title">
                            <h2>${element.name}</h2>
                            <p>${element.location}</p>
                        </div>
                        
                    </div>
                    <img class="post-img" 
                        src="${element.post}" 
                        alt="post-img" data-img="${element.username}">
                    <div class="icons pd">
                        
                        <img src="images/icon-heart.png" 
                            alt="like-icon" 
                            data-heart="${element.username}">
                        <img src="images/icon-comment.png" 
                            alt="comment-icon" 
                            data-comment="${element.username}">
                        <img src="images/icon-dm.png" 
                            alt="dm-icon" 
                            data-dm="${element.username}">
                        
                    </div>
                    <p class="likes bold pd">
                        <span id="likes-counter">${element.likes}</span> likes</p>
                    <p class="comment pd">
                        <span class="bold">${element.username}</span> ${element.comment}</p>
                    <div class="separator"></div>
                `
        renderHtml += displayEl
    })

    mainEl.innerHTML = renderHtml
}

document.addEventListener('click', function(e){
    if(e.target.dataset.heart){
        handleLikeClick(e.target.dataset.heart)
    }   
})

function handleLikeClick(postId){
    const postTargetObj = posts.filter(function(post){
        return post.username === postId
    })[0]
    postTargetObj.likes++
    renderPosts()
}

document.addEventListener('dblclick', function(e){
    if(e.target.dataset.img){
        handleLikeDoubleClick(e.target.dataset.img)
    }
})

function handleLikeDoubleClick(postId){
    const postTargetObj = posts.filter(function(post){
        return post.username === postId
    })[0]
    postTargetObj.likes++
    renderPosts()
}


