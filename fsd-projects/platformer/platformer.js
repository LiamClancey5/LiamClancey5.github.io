$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(20,170,200,10, "lightblu")

createPlatform(300,300,200,10, "lightblu")

createPlatform(20,400,200,10, "lightblu")

createPlatform(300,500,200,10, "lightblu")

createPlatform(20,630,200,10, "lightblu")

createPlatform(370,170,250,10, "lightblu")

createPlatform(570,120,100,60, "gray")

createPlatform(670,120,10,580, "lightblu")

createPlatform(670,700,300,10, "lightblu")

createPlatform(780,650,70,10, "lightblu")

createPlatform(880,600,70,10, "lightblu")

createPlatform(980,550,70,10, "lightblu")

createPlatform(1250,230,10,330, "lightblu")

createPlatform(1050,550,200,10, "lightblu")

createPlatform(980,350,100,10, "lightblu")

createPlatform(1150,450,100,10, "lightblu")

createPlatform(1150,230,100,10, "lightblu")

createPlatform(810,220,100,10, "lightblu")

createPlatform(800,0,10,550, "lightblu")

createPlatform(1250,700,300,10, "lightblu")

createPlatform(1100,700,50,10, "lightblu")
    // TODO 3 - Create Collectables

createCollectable("database", 840, 150)

createCollectable("database", 100, 560)

createCollectable("database", 910, 640)
    

    // TODO 4 - Create Cannons
createCannon("top", 300, 1300)

createCannon("left", 230, 1500)
    
createCannon("left", 670, 1)

createCannon("top", 1100, 2000)

createCannon("right", 80, 1000)

createCannon("top", 1270, 1000)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
