var Snow = function() {
    this.size = random(snow.minsize, snow.maxsize);
    this.position = createVector(random(width), random(-height, 0));
    this.speed = createVector(0, random(snow.maxspeed) * this.size/5);
    // this.aceleration = createVector(0, snow.gravity);
};

Snow.prototype.fall = function() {
    if(this.position.y < height) {
        // this.speed.add(this.aceleration);
        // this.speed.add(createVector(snow.wind, 0));
        this.position.add(this.speed);
    } else {
        // this.speed = createVector(0, snow.speed);
        this.position = createVector(random(width), -snow.maxsize);
        // this.aceleration = createVector(0, snow.gravity * this.size);
    }

    // this.position.x += random(-1, 1);
};

Snow.prototype.show = function() {
    push();
    noStroke();

    // image(leaf, this.position.x, this.position.y, this.size, this.size);
    // fill(255, 255, 255, 14 * this.size);
    fill(255, 255, 255, 240 / this.size * 3);
    ellipse(this.position.x, this.position.y, this.size, this.size);
    pop();
};
