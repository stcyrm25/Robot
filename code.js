var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

stroke("black");
strokeWeight(1.5);

background("lightblue");


var facecolor = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
fill(facecolor);
rect(100, 100, 200, 200);
regularPolygon(200, 230, 3, 20);


fill("white");

var eyeSize = randomNumber(50, 100);
arc(150, 160, eyeSize, eyeSize, 0, 360);
arc(250, 160, eyeSize, eyeSize, 0, 360);
fill("yellow");

arc(randomNumber(120, 180), randomNumber(130, 190), 15, 15, 0, 360);
arc(randomNumber(220, 240), randomNumber(130, 190), 15, 15, 0, 360);
stroke("black");
fill(rgb(randomNumber(0, 999), randomNumber(0, 999), 0));
var bulbcolor = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
fill(bulbcolor);
arc(200, 100, 80, 80, 180, 360);
rect(300, 200, 50, 50);
rect(50, 200, 50, 50);
arc(200, 100, 80, 80, 180, 360);

fill("white");

var pro = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
fill(pro);
arc(200, 250, 80, 80, 0, randomNumber(1, 200));

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
