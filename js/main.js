const sayHello = (name) => {
    console.log(`Hello there!`);
}

sayHello()

//footer year
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();


//header timed greeting
const greet = document.getElementById("greetings");

if (d.getHours() <6)
    greet.innerHTML = 'why are you awake, go to sleep...'
else if (d.getHours() < 17)
    greet.innerHTML = 'Good Afternoon!';
else if (d.getHours() < 24)
    greet.innerHTML = 'Good evening!';
else if (d.getHours() < 12)
    greet.innerHTML = 'Good morning!';



//button alert and hover
const btn = document.getElementById("btn-alert");
btn.addEventListener("click", () => {
    alert ('hah you just took instructions from a button')
});
btn.addEventListener("mouseout", function(){
    btn.textContent = "Click me!"
})
btn.addEventListener("mouseover", function(){
    this.textContent = "You really should click me!"
})

//loop list
for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
   if (i % 2 === 0) {
      li.textContent = " even";
    }
    else {
      li.textContent = " odd";
    }
    document.getElementById(`numbers`).appendChild(li);
  }