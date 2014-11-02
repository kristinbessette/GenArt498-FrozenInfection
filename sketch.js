var config = {
    // ice frost
    minsize: 20,
    maxsize: 100,
    speed: 2,
    spikes: 5,
    stroke: 20,
    // snow
    snow_particles: 500,
    snow_minsize: 2,
    snow_maxsize: 12,
    snow_maxspeed: 2,
    snow_gravity: 0.1,
    snow_wind: 0.0
};


var snowfall = [];
var icefrost = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    stroke(255, 255, 255, 50);
    strokeWeight(config.stroke);

    for(var i = 0; i < config.snow_particles; i++ ) {
        var flake = new Snow();
        snowfall.push(flake);
    }

}

function draw() {
    background(50, 50, 100);

    for(var i = 0; i < icefrost.length; i++) {
        icefrost[i].grow();
        icefrost[i].show();
    }

    for(var j = 0; j < snowfall.length; j++) {
        snowfall[j].fall();
        snowfall[j].show();
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
        // console.log(config.stroke/( (this.maxsize - this.minsize) / config.speed ));
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

var Snow = function() {
    this.size = random(config.snow_minsize, config.snow_maxsize);
    this.position = createVector(random(width), random(-height, 0));
    this.speed = createVector(0, random(config.snow_maxspeed) * this.size/5);
    // this.aceleration = createVector(0, config.snow_gravity);
};

Snow.prototype.fall = function() {
    if(this.position.y < height) {
        // this.speed.add(this.aceleration);
        // this.speed.add(createVector(config.snow_wind, 0));
        this.position.add(this.speed);
    } else {
        // this.speed = createVector(0, config.snow_speed);
        this.position = createVector(random(width), -config.snow_maxsize);
        // this.aceleration = createVector(0, config.gravity * this.size);
    }

    // this.position.x += random(-1, 1);
};

Snow.prototype.show = function() {
    push();
    noStroke();
    fill(255, 255, 255, 14 * this.size);
    // fill(255, 255, 255, 240 / this.size * 3);
    ellipse(this.position.x, this.position.y, this.size, this.size);
    pop();
};
