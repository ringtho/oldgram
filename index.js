import { posts } from "/data.js"


let mainEl = document.getElementById('main-container')


render()

function render(){
    posts.forEach(element => {
        const displayEl = ` 
                    <div class="avatar pd">
                        <img src="${element.avatar}" alt="avatar">
                        <div class="title">
                            <h2>${element.name}</h2>
                            <p>${element.location}</p>
                        </div>
                        
                    </div>
                    <img class="post-img" src="${element.post}" alt="post-img" ondblclick="doubleClick()">
                    <div class="icons pd">
                        
                        <img id="like-${element.username}" src="images/icon-heart.png" alt="like-icon" onclick="onClick()">
                        <img id="comments" src="images/icon-comment.png" alt="comment-icon">
                        <img id="message" src="images/icon-dm.png" alt="dm-icon">
                        
                    </div>
                    <p class="likes bold pd">
                        <span id="likes-counter">${element.likes}</span> likes</p>
                    <p class="comment pd"><span class="bold">${element.username}</span> ${element.comment}</p>
                    <div class="separator"></div>
                `
        mainEl.innerHTML += displayEl
    })
}

function incrementLikes(likesCount){
    let likes = Number(likesCount.innerText)
    likes += 1
    likesCount.innerText = likes
}


let likesCount = document.getElementById("likes-counter")


function onClick(){
    incrementLikes(likesCount)
}

function doubleClick(){
    incrementLikes(likesCount)
}

// const postImg = document.querySelector(".post-img")
// postImg.addEventListener('dblclick', function(){
//     incrementLikes(likesCount)   
// })

// let likeIcon = document.getElementById('like')
// likeIcon.addEventListener('click', function(){
//     incrementLikes(likesCount)
// })


