var makeMoveDancer = class extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(...arguments);
  }

  step () {
    makeDancer.prototype.step.call(this);
    var height = this.top;
    height += (Math.random() * 40) - 20;
    if (height > this.lowerBound - this.height) {
      height = this.lowerBound - this.height;
    }
    if (height < this.upperBound) { height = this.upperBound; }
    this.top = height;

    var width = this.left;
    width += (Math.random() * 40) - 20;
    if (width > this.rightBound - this.width) { width = this.rightBound - this.width; }
    if (width < this.leftBound) { width = this.leftBound; }
    this.left = width;

    this.setPosition();
  }
};
