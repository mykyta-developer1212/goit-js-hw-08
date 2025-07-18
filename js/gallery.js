const images = [
{
preview: './images/command.jpg',
original: './images/command-big.jpg',
description: 'Command work',
},
{
preview: './images/idea.jpg',
original: './images/idea-big.jpg',
description: 'idea',
},
{
preview: './images/list.jpg',
original: './images/list-big.jpg',
description: 'list',
},
{
preview: './images/interior.jpg',
original: './images/interior-big.jpg',
description: 'interior',
},
{
preview: './images/room.jpg',
original: './images/room-big.jpg',
description: 'room',
},
{
preview: './images/office.jpg',
original: './images/office-big.jpg',
description: 'office',
},
{
preview: './images/work.jpg',
original: './images/work-big.jpg',
description: 'work',
},
{
preview: './images/programming.jpg',
original: './images/programming-big.jpg',
description: 'programming',
},
{
preview: './images/plan.jpg',
original: './images/plan-big.jpg',
description: 'plan',
},
];


const gallery = document.querySelector('.gallery');

const markup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', event => {
  event.preventDefault();

  const clickedImage = event.target;

  if (clickedImage.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = clickedImage.dataset.source;
  console.log(largeImageURL);
});

document.querySelector('.gallery').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const largeImage = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImage}" alt="${e.target.alt}" />
  `);

  instance.show();
});

document.querySelector('.gallery').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const src = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${src}" alt="">`);
  instance.show();
});

document.querySelector('.gallery').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const src = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${src}" alt="">`);
  instance.show();
});
