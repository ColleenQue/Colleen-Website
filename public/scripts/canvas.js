const canvas = document.getElementById('canvas1'),
    ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Particle {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random() * 5 + 1; //between 1 and 6
        this.speedX = Math.random() * 3 - 1.5; //between 1.5 and -1.5
        this.speedY = Math.random() * 3 - 1.5; //between 1.5 and -1.5
    }
    update() { 
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = 'rgb(237, 75, 105)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}



function init(){
    for (let i=0;i<40;i++){
        particlesArray.push(new Particle()); //push to end of array
    }
}
init(); //particles array contains 100 particles 


function handleParticles(){
    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();