export function postUser(item) {

    let postBox = document.createElement('div')
    let imageBox = document.createElement('div')
    let image = document.createElement('img')
    let p = document.createElement('p')
    let containerLike = document.createElement('div')
    let countComent = document.createElement('div')
    let likes = document.createElement('div')
   let like =document.createElement('p')
   let coments  = document.createElement('div')
   let comentary =document.createElement('p')

   imageBox.style.backgroundImage = `url(${item.image})`;

   image.setAttribute("src", item.avatarUrl)
    like.textContent = item.likes ;
    comentary.textContent = item.comments;
    p.textContent = item.description;
    image.classList.add('post-image')
    p.classList.add('post-text')
    postBox.classList.add("post__item")
    imageBox.classList.add('image2')

    containerLike.classList.add('like-container')
    countComent.classList.add('coment-container')
    likes.classList.add('like-btn')
    like.classList.add('likes')
    coments.classList.add('coment-btn')
    comentary.classList.add('comentary')


   likes.onclick = () => {
    like.innerHTML++;
    
   }

 

   containerLike.append(like,likes)
   countComent.append(comentary , coments)
    postBox.append(imageBox)
    imageBox.append(image , p , containerLike , countComent )


    image.onclick = () => {
        window.location.href ="/profile.html";
        localStorage.setItem("userId", JSON.stringify(item))
    }
 
    return postBox
}
