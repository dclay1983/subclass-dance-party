var moveDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

moveDancer.prototype = Object.create(makeDancer.prototype);
moveDancer.prototype.constructor = moveDancer;

moveDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.setPosition(
    ($('body').height() - $('.topbar').height()) * Math.random(),
    $('body').width() * Math.random()
  );
};