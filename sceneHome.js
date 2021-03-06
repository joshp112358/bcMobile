var sceneHome = function(p) {
  p.preload = function() {
    myFont = p.loadFont("assets/GlacialIndifference-Regular.otf");
  }
  var playButton;

  p.setup = function() {
    p.createCanvas(p.displayWidth, p.displayHeight);
    p.background('#ccffff')
    p.fill('black');

    playButton = p.createButton('Play').position(p.displayWidth / 2 - 25, p.displayHeight - 400)
    playButton.style('width', '70px')
      .style('height', '35px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(switchToLevels);

    tutorialButton = p.createButton('Tutorial').position(p.displayWidth / 2 - 25, p.displayHeight - 350)
    tutorialButton.style('width', '70px')
      .style('height', '35px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(tutorial);
    p.noLoop();
  }
  p.draw = function() {
    //Title
    p.textSize(30);
    p.textFont(myFont)
    p.text('Broken Calculators', (p.displayWidth / 2) - 120, (p.displayHeight / 2) - 200);

  }

  function switchToLevels() {
    document.getElementById('homeScreen').style.display = 'none'
    document.getElementById('levelsScreen').style.display = 'block'
  }
  function tutorial() {
    document.getElementById('tutorialScreen').style.display = 'block'
    document.getElementById('homeScreen').style.display = 'none'
  }
}
