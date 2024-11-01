export function Story(item) {
    let story = document.createElement('div')
    let imageBox = document.createElement('div')
    let image = document.createElement('img')
    let p = document.createElement('p')
    let modal = document.querySelector('.modal')
    let close = document.querySelector('.closeModal')
  
 
   image.style.cursor = 'pointer';
    image.setAttribute("src", item.avatarUrl)
    p.textContent = item.userName

    p.classList.add('user-text')

    story.classList.add("story__item")
    imageBox.classList.add('image')
    
    image.onclick = () => {
        modal.style.display = 'block';
        modal.style.backgroundImage = `url(${item.avatarUrl})`;
    };

    close.onclick = () => {
        modal.style.display = 'none';
       
    };

    
    
    story.append(imageBox, p)
    imageBox.append(image)

    return story
}




