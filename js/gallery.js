const images = [
  {
    preview: './images/command.jpg',
    original: './images/command-big.jpg',
    description: 'Command work',
  },
  {
    preview: './images/idea.jpg',
    original: './images/idea-big.jpg',
    description: 'Idea',
  },
  {
    preview: './images/list.jpg',
    original: './images/list-big.jpg',
    description: 'List',
  },
  {
    preview: './images/interior.jpg',
    original: './images/interior-big.jpg',
    description: 'Interior',
  },
  {
    preview: './images/room.jpg',
    original: './images/room-big.jpg',
    description: 'Room',
  },
  {
    preview: './images/office.jpg',
    original: './images/office-big.jpg',
    description: 'Office',
  },
  {
    preview: './images/work.jpg',
    original: './images/work-big.jpg',
    description: 'Work',
  },
  {
    preview: './images/programming.jpg',
    original: './images/programming-big.jpg',
    description: 'Programming',
  },
  {
    preview: './images/plan.jpg',
    original: './images/plan-big.jpg',
    description: 'Plan',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <img 
          src="${preview}" 
          data-source="${original}" 
          alt="${description}" 
          class="gallery-image" />
      </li>`
  )
  .join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const largeImageURL = event.target.dataset.source;

  console.log(largeImageURL);

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${event.target.alt}" />
  `);
  instance.show();
});
