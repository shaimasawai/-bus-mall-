'use strict';

let imgArray = [

  'cthulhu.jpg' ,
  'banana.jpg',
  'bathroom.jpg',
  'banana.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg',

];

let bigarrar = [];
const imgprodact = document.getElementById('imgprodact');
let leftImage = document.getElementById('leftImage');
let medelImage = document.getElementById('medelImage');
let rightImage = document.getElementById('rightImage');
let counter = 0;
let numberOfRound = 25;




function imgdivid( name , imgSrc){
    this.name = name;
    this.imges = imgSrc;
    this.shown = 0;
    this.counter = 0;

    bigarrar.push(this);


}

imgArray.bigarrar =[];

for( let i=0 ; i < imgArray.length ; i++){
    
    new imgdivid (imgArray[i].split('.')[0] , imgArray[i] );

}
 console.log(bigarrar);


//  console.log(leftImage.src)
    //  console.log('./img/' +  bigarrar[ getRandomNumber( 0, imgArray.length - 1 )].imges)

 function imdplace () {
    let leftRandom = getRandomNumber( 0, imgArray.length - 1 );
    let maedlRandom = getRandomNumber( 0, imgArray.length - 1 );
    let rightRandom = getRandomNumber( 0, imgArray.length - 1 );
  




     leftImage.src = './img/' + bigarrar[leftRandom].imges;
     medelImage.src = './img/' +  bigarrar[ maedlRandom].imges;
     rightImage.src = './img/' +  bigarrar[rightRandom].imges;

    //  console.log(leftImage.src)
    //  console.log('./img/' +  bigarrar[leftRandom].imges)

     
    bigarrar[leftRandom].shown++;
   bigarrar[maedlRandom].shown++;
   bigarrar[rightRandom].shown++;

  // console.log(bigarrar)

 }

 imdplace();

 function getRandomNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  }


  console.log(this.counter);

imgprodact.addEventListener('click',clickHandler);

function clickHandler(e) {

  if((e.target.id === 'leftImage') && counter < numberOfRound) {

    imdplace();

    this.counter++;
  }
  else if ((e.target.id === 'medelImage')&& counter < numberOfRound) {
    imdplace();

    this.counter++;
  }

  else if ((e.target.id === 'rightImage')&& counter < numberOfRound) {
    imdplace();

   this.counter++;
  }
}





function score(){

  counter =counter + 1;

 let scoreSpan = document.getElementById("imgprodact");

  scoreSpan.innerHTML = counter ;


}






















