import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>;
  `;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  const isGalleryImageEl = e.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  console.log(isGalleryImageEl);
  e.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
  });

  console.log(lightbox);
}
