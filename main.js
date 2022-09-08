// // I will use fetch() to perform requests 
// // It will return a promise
// // The promise will either be fulfilled or rejected

// Add the API url to fetch
fetch('https://fakestoreapi.com/products').then((data)=>{
//    console.log(data);
   //     // converts the json to object
    return data.json();
}).then((completedData)=>{
    // console.log(completedData[2].title);

    let data1='';
completedData.map((values)=>{
    data1+= `<div class="card">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image} alt="img" class="images">
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class='price' >${values.price}</p>
</div>`
let home = document.getElementById("home")
  home.addEventListener("click",()=>{
document.getElementById('cards').innerHTML=data1;

  })
});
document.getElementById('cards').innerHTML=data1;
    
}).catch((err)=>{
    console.log(err);

})


function myFunction(){
    console.log("Hello")
}
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }


  let login = document.getElementById("login")
  login.addEventListener("click",()=>{
    console.log("Hello")
  })

  let cards = document.getElementById("cards")
  let message = document.getElementById("message")
  message.addEventListener("click",()=>{
    cards.innerHTML="<h1>Messages</h1>"
  })

  // adding click event to the services page
  let services = document.getElementById("services")
  services.addEventListener("click",()=>{
    let serviceTitle = document.createElement("h1")
    serviceTitle.textContent="Services Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    cards.innerHTML=""
    cards.appendChild(serviceTitle)
  })