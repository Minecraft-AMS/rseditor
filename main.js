//URL thingies
const urlParams = new URLSearchParams(window.location.search);
const urlString = urlParams.get('N');

//gridStuff
let xGraph = 0.6;
let yGraph = 0.6;
let gridContents = new Array(513);
let gridContentsCompressed = [];
let gridContentsFromUrl = [];

//graph constants
let graphDimx = 892;
let graphDimy = 881;
let graphGridThing = graphDimy - 240;

//rounded coords
let roundedX, roundedY, pos;

//selectionPanelStuff
let selectionPanelImageOrder = 4;
var selectedImg;

let cnv;

function preload() {
  imageInit();
}

function setup() {
  cnv = createCanvas(graphDimx, graphDimy);
  cnv.background(54, 57, 62);
  cnv.stroke(90);
  cnv.mouseClicked(clickedMouse);

  urlProcessing();

  gridContentsManage();
  gridBorders();
  gridItself();

  selectionPanelRectangle();
  selectionPanelImages();

  urlUpdate();
}

function draw() {
  gridBorders();
  gridItself();
}

function clickedMouse() {
  roundedX = floor(mouseX / 30);
  roundedY = floor(mouseY / 30);
  pos = (roundedY * 27) + roundedX;

  if ((mouseX > 0) && (mouseX < graphDimx - 3) && (mouseY > 0) && (mouseY < graphGridThing - 35)) {
    gridContentsManage();
    urlUpdate();
  }
  else {
    selectionPanelSelectionIndicator();
    selectionPanelImages();
  }
}

function urlProcessing() {
  if (urlString === null) {
      gridContents.fill('air');
  }
  else {
      let temp;
      gridContentsFromUrl = urlString.split(",")
      for (let i = 0; i < gridContentsFromUrl.length; i++) {
          if (isNaN(gridContentsFromUrl[i])) {
              temp = gridContentsFromUrl[i];
          }
          else {
              gridContents[gridContentsFromUrl[i]] = temp;
          }
      }
      for (let i = 0; i < gridContents.length; i++) {
          if (gridContents[i] === undefined) {
            gridContents[i] = 'air';
          }
        }
  }
}

function urlUpdate() {
  gridContentsCompressed = [];
  for (let i = 0; i < gridContents.length; i++) {
      if (gridContents[i] !== 'air') {
          if (gridContentsCompressed.includes(gridContents[i])) {
              gridContentsCompressed.splice(gridContentsCompressed.findIndex(u => u === gridContents[i]) + 1, 0, i);
          }
          else {
              gridContentsCompressed.push(gridContents[i]);
              gridContentsCompressed.push(i);
          }
      }
  }
  urlParams.set('N', gridContentsCompressed.toString());
  window.history.replaceState(null, null, `${location.pathname}?${urlParams}`);
}


//grid stuff

function gridBorders() {
  line(xGraph, 0, xGraph, graphDimy - 20);
  line(xGraph + 890, 0, xGraph + 890, graphDimy - 20);
  line(0, yGraph, graphDimy, yGraph);
  // line(0, graphGridThing - 30, graphDimx - 2, graphGridThing - 30);
}

function gridItself() {
  xGraph = 0.6;
  yGraph = 0.6;
  /*while (xGraph <= graphDimx) {
      line(xGraph, 0, xGraph, graphGridThing - 30.5);
      xGraph = xGraph + 30;
  }
  while (yGraph <= graphGridThing - 60) {
      line(0, yGraph, graphDimy, yGraph);
      yGraph = yGraph + 30;
  }*/
}

function gridContentsManage() {
  if (gridContents[pos] === blockNames[selectionPanelImageOrder]) {
    gridContents[pos] = 'air';
  }
  else {
    gridContents[pos] = blockNames[selectionPanelImageOrder];
  }

  for (let i = 0; i < gridContents.length; i++) {
    image(imageMap.get('air'), ((i + 27) % 27 * 30) + 0.56, (floor(i / 27) * 30) + 0.56, 30, 30);
    image(imageMap.get(gridContents[i]), ((i + 27) % 27 * 30) + 0.56, (floor(i/27) * 30) + 0.56, 30, 30);
  }

  // console.log(gridContents);
}

//selection panel stuff

function selectionPanelImages() {
  let selectionPanelX = 10
  let selectionPanelY = graphGridThing - 20;

  for (const blockName of blockNames) {
    image(imageMap.get(blockName), selectionPanelX, selectionPanelY, 30, 30);
    selectionPanelX = selectionPanelX + 40;
    if (selectionPanelX >= 790 + 80) {
      selectionPanelY = selectionPanelY + 40;
      selectionPanelX = 10;
    }
  }
}

function selectionPanelSelectionIndicator() {
  let selectionPanelImageX = floor(mouseX / 40);
  let selectionPanelImageY = floor((mouseY - 20) / 40);

  selectionPanelRectangle();
  
  fill(80,84,92);
  rect((selectionPanelImageX * 40) + 6, (selectionPanelImageY * 40) + 17, 38, 38, 5);
  selectionPanelImageOrder = ((selectionPanelImageY - 15) * 22) + selectionPanelImageX;
  selectedImg = imageMap.get(blockNames[selectionPanelImageOrder]);
}

function selectionPanelRectangle() {
  fill(54, 57, 62);
  rect(0.6, graphGridThing - 30, graphDimx - xGraph - 1, graphDimy - graphGridThing + 10);
  rect(0.6, graphGridThing - 30, 0.6 + 5 + 240, graphDimy - graphGridThing + 10);
}