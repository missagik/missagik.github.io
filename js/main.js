const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();

const greet = document.getElementById("greetings");

if (d.getHours() < 12) {
    document.greet.innerHTML = 'Good morning';
};
else if (d.getHours() < 18) 
    document.getElementById('greetings').innerHTML = 'Good afternoon';
