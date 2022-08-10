const canvas = document.getElementById('canvas1'),
    ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})



const mouse = { x: null, y: null }

canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y)
    drawCircle(event.x, event.y);
})

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }

}


function init(){
    for (let i=0;i<100;i++){
        particlesArray.push(new Particle());
    }
}
init();


function drawCircle(x, y) {

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fill();


}

