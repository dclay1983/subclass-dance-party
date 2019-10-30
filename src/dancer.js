var makeDancer = class {

  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;

    this.setPosition();
    this.step();
  }

  postInit () {
    this.height = this.$node.outerHeight();
    this.width = this.$node.outerWidth();
    setBounds(this);
    let wasChanged = false;

    if (this.top + this.height > this.lowerBound) {
      this.top = this.lowerBound - this.height;
      wasChanged = true;
    }
    if (this.left + this.width > this.rightBound) {
      this.left = this.rightBound - this.width;
      wasChanged = true;
    }
    if (wasChanged) { this.setPosition(); }
  }

  step () {
    this.timerID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition () {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  }

  stop () {
    clearTimeout(this.timerID);
  }

};
