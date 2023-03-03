import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryContent = createGalleryEl(galleryItems);

function createGalleryEl() {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }

    ).join("");
}
gallery.innerHTML = galleryContent;

gallery.addEventListener("click", onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
   const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

lightbox.open();

window.addEventListener("keydown", onEscClose);
function onEscClose(event) {
if (event.code === "Escape") {
    lightbox.close();
}
}
}




