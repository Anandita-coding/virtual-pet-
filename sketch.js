var dog , happyDog
var foodS,foodStock
var foodImage,food
var feed, addfood;

function preload()
{
  //load images here
  
  dogI = loadImage("images/dogImg.png")
  dogH = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  database = firebase.database();

   food = new Food(200,200)


  foodStock = database.ref('food')
  foodStock.on("value",function(data){
   foodS = data.val();
   food.foodStock = foodS

  })
   dog = createSprite(650,250,10,10)
  dog.addImage(dogI)
  dog.scale =0.3
  
  feed = createButton("Feed The Dog")
  feed.position(800,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(700,95)
  addFood.mousePressed(addFood)
}


function draw() {  
background(47,80,139)
  drawSprites();
  //add styles here
  
  textSize(20)
  
  text("Food Remaining:"+ foodS ,100,100)


 
  

    fedTime = database.ref('feedTime')
    fedTime.on("value",function(data){
      lastFed = data.val()
    });






food.display();
}
function readStock(data){
   foodS = data.val();
   console.log(foodS)
}

function feedDog(){

}
function addFood(){
  console.log(foodS)
  foodS++
  database.ref('/').update({
    
    food:foodS    
  })
  console.log(foodS)
}
