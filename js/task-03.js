const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Creating an image gallery based on an array of data

const listOfImages = images.map(image =>
  `<li class = "gallery-item"><img class = "gallery-image" src = ${image.url} alt = ${image.alt}></li>`
);
  
document.querySelector("#gallery").insertAdjacentHTML("afterbegin", listOfImages);

//Adding styles

document.querySelector("style").insertAdjacentHTML(
  "afterbegin",
  `#gallery {
    list-style: none;
    display: flex;
  }
  .gallery-item {
    margin: auto;
  }
  .gallery-image {
    width: 95%;
    border-radius: 50%;
    transition: transform 250ms ease-in-out;
  }
  .gallery-image:hover,
  .gallery-image:focus {
    transform: scale(1.1);
  }`
);