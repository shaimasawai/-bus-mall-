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
let resultclick = document.getElementById('theresult');
let counter = 0;
let numberOfRound = 25;
let leftRandom = 0;
let maedlRandom =0;
let rightRandom =0 ;
// let leftImage=0 ;
// let rightImage=0 ;
// let medelImage =0;




function imgdivid( name , imgSrc){
    this.name = name;
    this.imges = imgSrc;
    this.shown = 0;
    this.timeclik = 0;

    bigarrar.push(this);


}

imgArray.bigarrar =[];

for( let i=0 ; i < imgArray.length ; i++){
    
    new imgdivid (imgArray[i].split('.')[0] , imgArray[i] );

}
//  console.log(bigarrar);


//  console.log(leftImage.src)
    //  console.log('./img/' +  bigarrar[ getRandomNumber( 0, imgArray.length - 1 )].imges)

 function imdplace () {
     leftRandom = getRandomNumber( 0, imgArray.length - 1 );
     maedlRandom = getRandomNumber( 0, imgArray.length - 1 );
    rightRandom = getRandomNumber( 0, imgArray.length - 1 );
  




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





imgprodact.addEventListener('click',clickHandler);

function clickHandler(e) {

  if((e.target.id === 'leftImage' || e.target.id === 'medelImage' || e.target.id === 'rightImage' ) && counter < numberOfRound) {


    if(e.target.id === 'leftImage' ){


      //  bigarrar[leftRandom].timeclik++;

      console.log( bigarrar[leftRandom].timeclik++);
      

    }
    if(e.target.id === 'medelImage' ){


      //  bigarrar[leftRandom].timeclik++;

      console.log( bigarrar[maedlRandom].timeclik++);
      

    }
    if(e.target.id === 'rightImage' ){


      //  bigarrar[leftRandom].timeclik++;

      console.log( bigarrar[rightRandom].timeclik++);
      

    }

   

    // if (e.target.id === 'medelImage'){

    //   imgdivid.imgArray[medelImage].timeclik++;



    // }
    // if( e.target.id === 'rightImage' ){

    //   imgdivid.imgArray[rightImage].timeclik++;

    // }

    imdplace();

    counter++;
    // console.log(bigarrar);







  //   imgdivid.imgArray[leftImage].timeclik++;

  //   imdplace();

  //   this.counter++;
  // }
  // else if ((e.target.id === 'medelImage')&& counter < numberOfRound) {
  //   imdplace();

  //   this.counter++;
  // }

  // else if ((e.target.id === 'rightImage')&& counter < numberOfRound) {
  //   imdplace();

  //  this.counter++;
  // }
}

// counter++;

// console.log(this.timeclik);\
console.log(bigarrar);

}

// console.log(this.timeclik);


// function score(){

//   counter =counter + 1;

//  let scoreSpan = document.getElementById("imgprodact");

//   scoreSpan.innerHTML = counter ;


// }


// let button = document.getElementById("mohamed");

//   let count = 0;

//   button.onclick = function() {
//   count += 1;
//   button.innerHTML = "img1" + count ;
  
// };

// console.log(count);


// function clickin(){
//  document.getElementById("imgprodact").removeEventListener("click", imgresult);

buttonbelow.addEventListener('click', print);
function print(){
  const ul = document.createElement('ul');
  resultclick.appendChild(ul);

  for(let i=0 ; i< bigarrar.length ;i++){
    let li = document.createElement('li');
    li.textContent= `${bigarrar[i].name} had ${bigarrar[i].shown} votes , and was seen ${bigarrar[i].timeclik} time. `;
     ul.appendChild(li)

  }



}






















