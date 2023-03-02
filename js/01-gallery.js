import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryContent = createGalleryEl(galleryItems);

function createGalleryEl() {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }

    ).join("");
}
gallery.innerHTML = galleryContent;

gallery.addEventListener("click", onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${event.target.dataset.source}">
`);
instance.show();

window.addEventListener("keydown", onEscClose);
function onEscClose(event) {
if (event.code === "Escape") {
instance.close();
}
}
}

