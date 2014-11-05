var leaves = {
    particles: 80,
    minsize: 10,
    maxsize: 80,
    maxspeed: 1,
    gravity: 0.05,
    wind: 0.0
};

var snow = {
    particles: 500,
    minsize: 2,
    maxsize: 12,
    maxspeed: 2,
    gravity: 0.1,
    wind: 0.0
};

var frost = {
    minsize: 20,
    maxsize: 100,
    speed: 2,
    spikes: 5,
    stroke: 20,
};

var particles = [];
var icefrost = [];
var leaf;

function preload() {
    leaf = loadImage("images/leaf.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    stroke(255, 255, 255, 100);
    strokeWeight(frost.stroke);
    winter();
}

function draw() {

    clear();
    // background(31);

    for(var j = 0; j < particles.length; j++) {
        particles[j].fall();
        particles[j].show();
    }
}

function fall() {
    for(var i = 0; i < leaves.particles; i++ ) {
        var aLeaf = new Leaves();
        particles.push(aLeaf);
    }
    console.log("fall");
}

function winter() {
    for(var i = 0; i < snow.particles; i++ ) {
        var flake = new Snow();
        particles.push(flake);
    }
    console.log("winter");
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
