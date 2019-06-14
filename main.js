// // Phone Object
// var operations=["Increase balance","Transfer","Campaign fee"]
// function Phone(brand, cost, model, capacity, ram, camera, color, balance=0.00) {
//     this.brand = brand
//     this.cost = cost
//     this.model = model
//     this.capacity = capacity
//     this.ram = ram
//     this.camera = camera
//     this.color = color,
//     this.balance = balance
//     this.getInfo = function () {
//         for (key in this) {
//             if (typeof (this[key]) != "function") {
//                 console.log(key+": "+this[key])
//             }
//         }
//     }
//     this.getBalance=function(){
//         return balance
//     }
//     this.chargeBalance=function(){
//        var operation= prompt("Please write your operation")
//        var number=prompt("Write amount")
//        if(operation==operations[0]){
//         if(isNaN(number)){
//             throw new Error("You must enter number")
//         }
//         else{
//             return balance+=Number(number)
//         }
//        }
//        if(operation!=operations[0] && operations.includes(operation)){
//         if(isNaN(number)){
//             throw new Error("You must enter number")
//         }
//         else{
//             if(number>balance){
//              alert("You have not enough balance")
//             }
//             else{
//                 return balance-=Number(number)
//             }
            
//         }
//        }
//     else{
//         throw new Error("This operatin does not exist in array")
//     }
       
//     }
// }

// //Samsung
// var samsung = new Phone("Samsung", 1200, "A8", "64GB", "8GB", "16MP", "black",10)
// samsung.getInfo()
// //Prompts
// console.log("Your balance is "+samsung.getBalance()+" azn")
// console.log("Now your balance is "+samsung.chargeBalance()+" azn")

// console.log("\n")
// console.log("\n")
// console.log("\n")

// //Nokia
// var nokia=new Phone("Nokia",50,"N93","4GB","2GB","4MP","white",0.5)
// nokia.getInfo()
// //Prompts
// console.log("Your balance is "+samsung.getBalance()+" azn")
// console.log("Now your balance is "+samsung.chargeBalance()+" azn")



//--------------------------------------------------------------------------------------------------
// Template without CSS
var body=document.getElementById("body")
body.style.margin="0px"
body.style.backgroundColor="rgba(234, 227, 227, 0.45)"
 var image=document.getElementById("image")
image.style.height="80px"
image.style.width="100%"
image.style.backgroundImage='url("img/bg.jpg")'
image.style.backgroundRepeat="no-repeat"
image.style.backgroundSize="cover"
var search=document.getElementById("search")
search.style.width="60%"
search.style.margin="0px auto"
search.style.padding="20px 30px"


search.style.backgroundColor="white"

search.style.transform="translateY(-50%)"
var searchBox=document.getElementsByClassName("searchBox")
var courseKey=document.getElementById("course-key")
courseKey.style.padding="10px 150px 10px 10px"
var category=document.getElementById("category")
category.style.padding="10px"
var searchBtn=document.getElementById("searchBtn")
searchBtn.style.borderLeft="1px solid gray"
searchBtn.style.margin="10px"
searchBtn.style.marginLeft="80px"
courseKey.innerHTML="Course Keyword"
category.innerHTML="All Categories<span id='downArrow'><i class='fas fa-chevron-down'></i></span>"
var downArrow=document.getElementById("downArrow")
downArrow.style.paddingLeft="150px"
search.style.display="flex"
for(let i=0;i<searchBox.length;i++){
    searchBox[i].style.margin="10px"
    searchBox[i].style.border="1px solid gray"
}
var searchCourseBtn=document.getElementById("searchCourseBtn")
searchCourseBtn.innerHTML="Search Course"
searchCourseBtn.style.color="white"
searchCourseBtn.style.padding="10px 30px"
searchCourseBtn.style.backgroundColor="orange"
searchCourseBtn.style.margin="0px 30px"
searchCourseBtn.style.boxShadow="white 3px 3px, 5px 4px 4px orange"

// Offer Section

var offerSection=document.getElementById("offer")

var offerHeading=document.getElementById("offer-heading")
offerHeading.style.textAlign="center"
offerHeading.innerHTML="<h1 id='heading'>OFFERING THE BEST<br>IN EDUCATION TO THE WORLD</h1><p>Sign-up today to join over 6 million lerners already on ALLISON</p>"
var heading=document.getElementById("heading")
heading.style.margin="0px"
heading.style.fontSize="40px"
heading.style.color="black"
offerSection.style.fontFamily="Trebuchet MS"
var container=document.getElementById("container")
container.style.width="60%"

container.style.margin="0px auto"
var ourOffers=document.getElementById("our-offers")
ourOffers.style.display="flex"
ourOffers.style.marginTop="40px"

var box=document.getElementsByClassName(" box")
var icons=document.getElementsByClassName("icon")
var circles=document.getElementsByClassName("circle")
var textHeading=["Best Learning Communities","Online Teaching Jobs","Learn Courses Online","Book Library & Store"]
var h4=document.getElementsByTagName("h4")
var info=document.getElementsByClassName("info")
for(let i=0;i<box.length;i++){
 
    box[i].style.width="25%"
    box[i].style.textAlign="center"
    if(i!=box.length-1){
        box[i].style.marginRight="20px"
    }
    
}
for(let i=0;i<icons.length;i++){
    icons[i].style.fontSize="30px"
    icons[i].style.padding="20px"
}

var colors=["red","green","blue","turquoise"]

 for(let i=0;i<circles.length;i++){
    
      circles[i].style.width="80px"
      circles[i].style.borderRadius="50%"
    circles[i].style.backgroundColor=colors[i]
     circles[i].style.color="white"
     circles[i].style.transform="translateX(93%)"
 }
for(let i=0;i<h4.length;i++){
    h4[i].innerText=textHeading[i]
    h4[i].style.color="black"
}
for(let i=0;i<info.length;i++){
    info[i].style.margin="0px"
    info[i].innerHTML="The idea is to keep the discussions going after class ends"
}