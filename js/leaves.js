var Leaves = function() {
    this.size = random(leaves.minsize, leaves.maxsize);
    this.angle = random(TAU);
    this.position = createVector(random(width), random(-height, 0));
    this.speed = createVector(0, random(leaves.maxspeed) * this.size/40);
    // this.aceleration = createVector(0, leaves.gravity);
};

Leaves.prototype.fall = function() {
    if(this.position.y < height) {
        // this.speed.add(this.aceleration);
        // this.speed.add(createVector(leaves.wind, 0));
        this.position.add(this.speed);
    } else {
        // this.speed = createVector(0, leaves.speed);
        this.position = createVector(random(width), -leaves.maxsize);
        // this.aceleration = createVector(0, leaves.gravity * this.size);
    }

    // this.position.x += random(-1, 1);
};

Leaves.prototype.show = function() {

    push();
    noStroke();
    noFill();
    translate(this.position.x, this.position.y);
    image(leaf, this.position.x, this.position.y, this.size, this.size);
    pop();
    rotate(this.angle);
};
