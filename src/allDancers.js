var pause = function($node) {
  if (!paused) {
    dancers.forEach( function (dancer) {
      dancer.stop();
    });
    if ($node) { $node.text('unpause'); }
    paused = true;
  } else {
    dancers.forEach( function (dancer) {
      dancer.step();
    });
    if ($node) { $node.text('pause'); }
    paused = false;
  }
};

var lineUp = function($node) {
  if (!aligned) {
    pause();
    getDancersByClassName();
    let rowCount = Object.keys(lines).length;
    let rowPosition = maxHeight / (rowCount + 1);
    let rowsPosition = [];
    for (let i = 0; i < rowCount; i++) {
      rowsPosition[i] = rowPosition * (i + 1) + bodyTop;
    }
    rowsPosition.reverse();
    // array of postiion for each column

    let columns = [];
    for (line in lines) {
      columns.push(lines[line]);
    }
    columns.sort( function (column, lastcolumn) {
      return lastcolumn.length - column.length;
    });
    let columnCount = columns[0].length;

    let BaseIsOdd = columnCount % 2 !== 0;
    let columnMid = maxWidth / 2;
    let gridWidth = (maxWidth / columnCount) - 10;

    columns.forEach( function (dancerClass, i) {
      let mHeight = rowsPosition[i] + (gridWidth / 2);
      let uBound = rowsPosition[i] - (gridWidth / 2);
      currentMid = dancerClass.length % 2 === 0 ? columnMid + (gridWidth / 2) : columnMid;
      dancerClass.forEach( function (dancer, j) {
        mid = j * (gridWidth + 10);
        j % 2 === 0 ? currentMid += mid : currentMid -= mid;
        let lBound = currentMid - (gridWidth / 2);
        let mWidth = currentMid + (gridWidth / 2);
        dancer.top = rowsPosition[i] - (dancer.height / 2);
        dancer.left = currentMid - (dancer.width / 2);
        setBounds(dancer, uBound, mHeight, mWidth, lBound);
        dancer.setPosition();
      });
    });
    aligned = true;
    $node.text('release');
    pause();
  } else {
    pause();
    dancers.forEach( function (dancer) {
      setBounds(dancer);
    });
    $node.text('line up');
    pause();
    aligned = false;
  }
};

var getDancersByClassName = function(className = null) {
  // Returns an object of all Dancers with keys of classNames and values
  // are arrays of dancers.
  // If className is passed, only returns dancers of that className as an
  // array
  window.lines = {};
  dancers.forEach( function (dancer) {
    name = dancer.constructor.name;
    if (lines.hasOwnProperty(name)) {
      lines[name].push(dancer);
    } else {
      lines[name] = [dancer];
    }
  });

  return lines[className];
};

var setBounds = function (dancer, uBound = bodyTop, mHeight = maxHeight, mWidth = maxWidth, lBound = 0) {
  dancer.upperBound = uBound;
  dancer.lowerBound = mHeight - dancer.height;
  dancer.leftBound = lBound;
  dancer.rightBound = mWidth - dancer.width;
};