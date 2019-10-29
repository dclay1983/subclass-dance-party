var colorBlinkDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};
colorBlinkDancer.prototype = Object.create(makeDancer.prototype);
colorBlinkDancer.prototype.constructor = colorBlinkDancer;

colorBlinkDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var red = Math.floor(Math.random() * 255);
  this.$node.css('border', `10px solid rgb(${red}, ${green}, ${blue})`);
};