var Frost = function(x, y) {
    this.position = createVector(x, y);
    this.minsize = frost.minsize;
    this.maxsize = random(this.minsize, frost.maxsize);
    this.size = this.minsize;
    this.angle = random(TAU);
};

Frost.prototype.grow = function(){
    if(this.size < this.maxsize) {
        this.size += frost.speed;
        // console.log(frost.stroke/( (this.maxsize - this.minsize) / frost.speed ));
    }
};

Frost.prototype.show = function(){
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    strokeWeight(frost.stroke*this.size/this.maxsize);
    stroke(255, 255, 255, 100);

    for(var i = 1; i <= frost.spikes; i++) {
        rotate(TAU/frost.spikes);
        // for(var k = 1; k <= frost.segments; k++){
        //     strokeWeight(frost.stroke * this.size/this.maxsize / k);
        //     line(this.size/frost.segments * (k-1), this.size/frost.segments * (k-1), this.size/frost.segments, this.size/frost.segments);
        // }
        line(0, 0, this.size, this.size);
    }
    pop();
};
