var makeBlinkyDancer = class extends makeDancer {

  constructor (top, left, timeBetweenSteps) {
    super(...arguments);
  }

  step () {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
  }

};
