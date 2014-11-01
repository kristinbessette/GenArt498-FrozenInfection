var config = {
    minsize: 10,
    maxsize: 80,
    speed: 1,
    spikes: 5
};

var icefrost = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    stroke(255, 255, 255, 180);
    strokeWeight(8);
}

function draw() {
    background(50, 50, 100);

    for(var i = 0; i < icefrost.length; i++) {
        icefrost[i].grow();
        icefrost[i].show();
    }
}

function mousePressed() {
    createFrost(mouseX, mouseY);
}

function mouseDragged() {
    createFrost(mouseX, mouseY);
}

function createFrost(x, y) {
    var aFrost = new Frost(x, y);
    icefrost.push(aFrost);
}

var Frost = function(x, y) {
    this.position = createVector(x, y);
    this.minsize = config.minsize;
    this.maxsize = random(this.minsize, config.maxsize);
    this.size = this.minsize;
    this.angle = random(TAU);
};

Frost.prototype.grow = function(){
    if(this.size < this.maxsize) {
        this.size += config.speed;
    }
};

Frost.prototype.show = function(){
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    for(var i = 1; i <= config.spikes; i++) {
        rotate(TAU/config.spikes);
        line(0, 0, this.size, this.size);
    }
    pop();
};
