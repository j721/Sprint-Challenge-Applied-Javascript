/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  //create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  //add classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  // img1.classList.add('img'); 
  // img2.classList.add('img'); 
  // img3.classList.add('img'); 
  // img4.classList.add('img');

  //set content
    img1.src= "./assets/carousel/mountains.jpeg";
    img2.src= "./assets/carousel/computer.jpeg";
    img3.src= "./assets/carousel/trees.jpeg";
    img4.src= "./assets/carousel/turntable.jpeg";

  //append elements
    carousel.append(leftButton);
    carousel.append(img1);
    carousel.append(img2);
    carousel.append(img3);
    carousel.append(img4);

    //text content
    leftButton.textContent ="<";
    rightButton.textContent=">";

    //styles
    img1.style.display= "block";
    // img2.style.display="block"; 
    // img3.style.display= "block";
    // img4.style.display= "block";


  const imageArray=[img1, img2, img3, img4];

  // let index === 0; 

  const newImage = (picture, index)=>{
    if (index===0){
      picture.style.display ="block";
    }
    else{
      picture.style.display ="none";
    }
  }

 leftButton.addEventListener('click', event=>{
    index+=1
    imageArray.forEach(newImage);
 })


 return carousel; 
}


// const imageArray=[img1, img2, img3, img4];
// imageArray.forEach(element=>{

// })



const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(createCarousel());

console.log(carouselContainer);