import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

// console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
  </div>;
  `;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  const isGalleryImageEl = e.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
  e.preventDefault();

  const largeImage = e.target.dataset.source;
  console.log(largeImage);

  const instance = basicLightbox.create(`
      <img src="${largeImage}">
  `);

  instance.show();
}
