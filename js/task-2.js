const listEl = document.querySelector('.gallery');
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
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


const itemEl1 = document.createElement('li');
itemEl1.classList.add('js-gallery-img');
const imageEl1 = document.createElement('img');
imageEl1.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl1.alt = 'White and Black Long Fur Cat';
imageEl1.width = 360;
itemEl1.appendChild(imageEl1);

const itemEl2 = document.createElement('li');
itemEl2.classList.add('js-gallery-img');
const imageEl2 = document.createElement('img');
imageEl2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imageEl2.width = 360;
itemEl2.appendChild(imageEl2);

const itemEl3 = document.createElement('li');
itemEl3.classList.add('js-gallery-img');
const imageEl3 = document.createElement('img');
imageEl3.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl3.alt = 'Group of Horses Running';
imageEl3.width = 360;
itemEl3.appendChild(imageEl3);

const itemEl4 = document.createElement('li');
itemEl4.classList.add('js-gallery-img');
const imageEl4 = document.createElement('img');
imageEl4.src = 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
imageEl4.alt = 'Elephant Beside on Baby Elephant';
imageEl4.width = 360;
itemEl4.appendChild(imageEl4);

const itemEl5 = document.createElement('li');
itemEl5.classList.add('js-gallery-img');
const imageEl5 = document.createElement('img');
imageEl5.src = 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
imageEl5.alt = 'Blue Geeen and Orange Parrot';
imageEl5.width = 360;
itemEl5.appendChild(imageEl5);

const itemEl6 = document.createElement('li');
itemEl6.classList.add('js-gallery-img');
const imageEl6 = document.createElement('img');
imageEl6.src = 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
imageEl6.alt = 'Zebras on Zebra';
imageEl6.width = 360;
itemEl6.appendChild(imageEl6);


listEl.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);






