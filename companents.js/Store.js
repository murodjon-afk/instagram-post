export function Story(item) {
    let story = document.createElement('div')
    let imageBox = document.createElement('div')
    let image = document.createElement('img')
    let p = document.createElement('p')

    image.setAttribute("src", 'data:image/jpeg;base64,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')
    p.textContent = item.name ;

    p.classList.add('user-text')

    story.classList.add("story__item")
    imageBox.classList.add('image')

    story.append(imageBox, p)
    imageBox.append(image)

    return story
}




