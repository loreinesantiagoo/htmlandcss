function createBottle(imageName) {
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', imageName);
    imgElem.classList.add('small-bottle');
    return (imgElem);
}
//Create an image - not in the DOM yet

//Decocarte the element

var dogs = [
    'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
    'http://www.dogster.com/wp-content/uploads/2017/12/A-puppy-with-a-toy.jpg',
    'http://www.franklincountydogs.com/adopt/assets/images/adoptable-size.jpg'
];

//Find the place to attach the element
var hereElem = document.body.querySelector('#here');
var bottle;

for (var i in dogs) {
    var d = createBottle(dogs[i]);
    hereElem.appendChild(d);
}

/*
for (var i = 0; i < 100; i++) {
    if ((i % 2) == 0)
        bottle = createBottle('/images/dog.jpg');
    else
        bottle = createBottle('/images/beer.png');
    hereElem.appendChild(bottle);
}
*/