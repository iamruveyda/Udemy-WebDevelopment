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
var interval;

var settings = {
    duration: '500',
    random: false
};

init(settings);

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

document.querySelectorAll('.arrow').forEach(function (item) {

    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function (item) {

    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})


/* setInterval() yöntemi, belirtilen aralıklarla (milisaniye cinsinden) bir işlevi çağırır. */

function init(settings) {

    var prew;

    interval = setInterval(function () {


        if (settings.random) {
            // random index

            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev)
            prev = index;

        } else {
            // artan index

            if (slideCount == index + 1) {
                index = -1;
            }

            showSlide(index);
            console.log(index);
            index++;

        }

        showSlide(index);

    }, settings.duration)
}


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