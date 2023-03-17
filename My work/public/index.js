//VARIANTA NEOPTIMA
/*let card1 = {
  imagine: 'landscape1.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 1.',
};

let card2 = {
  imagine: 'landscape2.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 2.',
};

let card3 = {
  imagine: 'landscape3.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 3.',
};

let card4 = {
  imagine: 'landscape4.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 4.',
};

let card5 = {
  imagine: 'landscape5.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 5.',
};

let card6 = {
  imagine: 'landscape6.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 6.',
};

let card7 = {
  imagine: 'landscape7.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 7.',
};

let card8 = {
  imagine: 'landscape8.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 8.',
};

let card9 = {
  imagine: 'landscape9.jpg',
  descriere: 'Aceasta este o descriere pentru cardul 9.',
};

// Selectarea elementului cu id-ul "placeholder-x" si adaugarea descrierii
// Selectarea elementului cu class "card-imagex" si adaugarea imaginii

document.querySelector('#placeholder-1').textContent = card1.descriere;
document.querySelector('.card-image1 img').src = card1.imagine;

document.querySelector('#placeholder-2').textContent = card2.descriere;
document.querySelector('.card-image2 img').src = card2.imagine;

document.querySelector('#placeholder-3').textContent = card3.descriere;
document.querySelector('.card-image3 img').src = card3.imagine;

document.querySelector('#placeholder-4').textContent = card4.descriere;
document.querySelector('.card-image4 img').src = card4.imagine;

document.querySelector('#placeholder-5').textContent = card5.descriere;
document.querySelector('.card-image5 img').src = card5.imagine;

document.querySelector('#placeholder-6').textContent = card6.descriere;
document.querySelector('.card-image6 img').src = card6.imagine;

document.querySelector('#placeholder-7').textContent = card7.descriere;
document.querySelector('.card-image7 img').src = card7.imagine;

document.querySelector('#placeholder-8').textContent = card8.descriere;
document.querySelector('.card-image8 img').src = card8.imagine;

document.querySelector('#placeholder-9').textContent = card9.descriere;
document.querySelector('.card-image9 img').src = card9.imagine;*/

//VARIANTA MAI OPTIMA
// Array-ul de obiecte card
let cards = [
  {
    imagine: 'landscape1.jpg',
    titlu: 'Fascinating Transalpine',
    descriere: 'Aceasta este o descriere pentru cardul 1.',
  },
  {
    imagine: 'landscape2.jpg',
    titlu: 'Charming Bulgaria',
    descriere: 'Aceasta este o descriere pentru cardul 2.',
  },
  {
    imagine: 'landscape3.jpg',
    titlu: 'Celestial Sibiu',
    descriere: 'Aceasta este o descriere pentru cardul 3.',
  },
  {
    imagine: 'landscape4.jpg',
    titlu: 'Custom picture for windows',
    descriere: 'Aceasta este o descriere pentru cardul 4.',
  },
  {
    imagine: 'landscape5.jpg',
    titlu: 'Custom banner',
    descriere: 'Aceasta este o descriere pentru cardul 5.',
  },
  {
    imagine: 'landscape6.jpg',
    titlu: 'Custom profile picture',
    descriere: 'Aceasta este o descriere pentru cardul 6.',
  },
  {
    imagine: 'landscape7.jpg',
    titlu: 'Summer Highlight for Instagram',
    descriere: 'Aceasta este o descriere pentru cardul 7.',
  },
  {
    imagine: 'landscape8.jpg',
    titlu: 'Travel Highlight for Instagram',
    descriere: 'Aceasta este o descriere pentru cardul 8.',
  },
  {
    imagine: 'landscape9.jpg',
    titlu: 'Christmas card',
    descriere: 'Aceasta este o descriere pentru cardul 9.',
  },
];

// Selectarea elementelor cu id-ul "placeholder-x" si class "card-imagex" si adaugarea descrierii si imaginii
//For-ul inainte, folosind descrierile default din tablouri, fara preluarea datelor dintr-un fake API
/*for (let i = 0; i < cards.length; i++) {
  document.querySelector('#placeholder-' + (i + 1)).textContent =
    cards[i].descriere;
  document.querySelector('.card-image' + (i + 1) + ' img').src =
    cards[i].imagine;
}*/

//For-ul dupa, folosind datele din fake API pe post de descriere in <p>...</p>
for (let i = 0; i < cards.length; i++) {
  getDescriptionFromAPI(i).then((description) => {
    document.querySelector('#placeholder-' + (i + 1)).textContent = description;
  });
  document.querySelector('#card-title-' + (i + 1)).textContent = cards[i].titlu;
  document.querySelector('#card-image' + (i + 1) + ' img').src =
    cards[i].imagine;
}

//https://jsonplaceholder.typicode.com/posts/2

function getDescriptionFromAPI(index) {
  return fetch('https://jsonplaceholder.typicode.com/posts/2' + (index + 1))
    .then((response) => response.json())
    .then((data) => data.title);
}

//La hover peste elementele cu id-urile date mai jos, devin yellow
var strongIds = ['strong1', 'strong2', 'strong3'];

for (var i = 0; i < strongIds.length; i++) {
  var strong = document.getElementById(strongIds[i]);

  strong.addEventListener('mouseover', onMouseOver);
  strong.addEventListener('mouseout', onMouseOut);
}

function onMouseOver(event) {
  var strong = event.target; //accesam elementul curent
  var style = window.getComputedStyle(strong);
  strong.style.backgroundColor = 'yellow';
}

function onMouseOut(event) {
  var strong = event.target;
  var style = window.getComputedStyle(strong);
  strong.style.backgroundColor = 'white';
}
