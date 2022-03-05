var gameCharacter = [
    {
        name: 'Nathan Drake',
        image: 'characters/nathan.png',
        link: 'https://uncharted.fandom.com/wiki/Nathan_Drake'
    },
    {
        name: 'Samuel Drake',
        image: 'characters/sam.png',
        link: 'https://uncharted.fandom.com/wiki/Samuel_Drake'
    },
    {
        name: 'Victor Sullivan',
        image: 'characters/sully.png',
        link: 'https://uncharted.fandom.com/wiki/Victor_Sullivan'
    },
    {
        name: 'Elena Fisher',
        image: 'characters/elena.png',
        link: 'https://uncharted.fandom.com/wiki/Elena_Fisher'
    },
    {
        name: 'Rafe Adler',
        image: 'characters/rafe.png',
        link: 'https://uncharted.fandom.com/wiki/Rafe_Adler'
    }
];

var index = 0;
var slideCount = gameCharacter.length;

showSlide(index);

document.querySelector('.bi-arrow-left-square-fill').addEventListener('click', function () {

    index--;
    showSlide(index);
    console.log(index);

});

document.querySelector('.bi-arrow-right-square-fill').addEventListener('click', function () {

    index++;
    showSlide(index);
    console.log(index);

});


function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }

    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = gameCharacter[index].name;

    document.querySelector('.card-img-top').setAttribute('src', gameCharacter[index].image);

    document.querySelector('.card-link').setAttribute('href', gameCharacter[index].link);
}