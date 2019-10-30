var makeColorDancer = class extends makeDancer {

  constructor (top, left, timeBetweenSteps) {
    super(...arguments);
  }

  step () {
    makeDancer.prototype.step.call(this);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var red = Math.floor(Math.random() * 255);
    this.$node.css('border', `10px solid rgb(${red}, ${green}, ${blue})`);
  }

};
