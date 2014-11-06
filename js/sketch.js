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
    wind: 0.02
};

var frost = {
    minsize: 20,
    maxsize: 80,
    speed: 2,
    spikes: 5,
    stroke: 20,
};

var particles = [];
var icefrost = [];
var leaf;
var winterFlag = 0;

function preload() {
    leaf = loadImage("images/leaf.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    stroke(255, 255, 255, 100);
    strokeWeight(frost.stroke);
    setInterval(winter, 10000);
}

function draw() {

    clear();
    // background(31);

    for(var i = 0; i < icefrost.length; i++) {
        icefrost[i].grow();
        icefrost[i].show();
    }

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
    if(!winterFlag) {
        for(var i = 0; i < snow.particles; i++ ) {
            var flake = new Snow();
            particles.push(flake);
        }
        console.log("winter");
        winterFlag = 1;
    }
}

function mousePressed() {
    createFrost(mouseX, mouseY);
}

function mouseDragged() {
    createFrost(mouseX, mouseY);
}

function createFrost(x, y) {
    if(winterFlag){
        var aFrost = new Frost(x, y);
        icefrost.push(aFrost);
    }
}
