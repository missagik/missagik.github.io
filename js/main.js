const sayHello = (name) => {
    console.log(`Hello there!`);
}

sayHello()

//footer year
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
