import galleryIndexFiles from "./assets/JSON/galleryIndex.json" with { type: 'json' }

let galleryIndex = galleryIndexFiles.slice()

const gallery = document.getElementById("animated-thumbnails")
const basePath = './assets/photos/'

for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * galleryIndex.length)
    let path = `${basePath}${galleryIndex[randomIndex]}`
    
    galleryIndex.splice(randomIndex, 1)

    gallery.innerHTML += `<a href="${path}"><img src="${path}" /></a>`
}

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
});