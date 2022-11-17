const imageContainer = document.getElementById('image-container')
const load = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []



const wd3g65= 30

//It is NOT good to post keys on github, however this is only made an exception since it is public access. 
const t7u81sw='0DwNx_nHL06Z_LmDThcE_pWR_XDKqUStEhsGqPB6SRE'
const ikhgtfc126= `https://api.unsplash.com/photos/random/?client_id=${t7u81sw}&count=${wd3g65}`;

function imageLoaded() {
    imagesLoaded++
    console.log(imagesLoaded)
    if(imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
        console.log('ready =', ready)
    }
}


function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    imagesLoaded = 0
    photosArray.forEach((photo) => {
    const item = document.createElement('a')

    totalImages = photosArray.length
    console.log('total image', totalImages)

    setAttributes(item, {
        href: photo.links.html,
        target:'_blank'
    })

    const img = document.createElement('img')
    // img.setAttribute('src', photo.urls.regular)
    // img.setAttribute('alt', photo.alt_description)
    // img.setAttribute('title', photo.alt_description)

    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
    })

    img.addEventListener('load', imageLoaded)

    item.appendChild(img)
    imageContainer.appendChild(item)
    })
}

async function getPhotos() {
    try {
        const response = await fetch(ikhgtfc126)
        photosArray = await response.json()
        displayPhotos()
 
    } catch (error) {

    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
       getPhotos() 
    }
})

getPhotos()