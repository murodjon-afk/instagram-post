 let userId =localStorage.getItem("userId")
 console.log(userId);
 


fetch(`http://localhost:3001/posts/${userId}`)
.then((response) => response.json())
.then((data) => {showInfo(data) ,console.log(data);
})

function showInfo(item) {
    const infoUser = document.querySelector('.userinfo-header')
    const imageUser = document.querySelector('.image-user');
    const nickName = document.querySelector('.nickName');
    const follower = document.querySelector('.followers');
    const follow = document.querySelector('.following'); 
    const sureNames = document.querySelector('.sure-name');
    const posts = document.querySelectorAll('.post'); 

    imageUser.setAttribute('src', item.avatarUrl);
    nickName.textContent = 'hello'; 
    follower.textContent = `${item.follower}`
    follow.textContent = item.following;
    sureNames.textContent = item.email;

    posts.forEach((post, index) => {
        post.setAttribute('src', item.images[index]); 
    });

    return infoUser
}

