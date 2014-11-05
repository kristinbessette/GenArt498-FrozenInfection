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
    for(var i = 1; i <= frost.spikes; i++) {
        rotate(TAU/frost.spikes);
        line(0, 0, this.size, this.size);
    }
    pop();
};
