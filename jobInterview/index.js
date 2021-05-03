class container {
  var counter = 0;
  constructor(element, color1, color2) {
    this.element = element;
    this.colo1 = color1;
    this.color2 = color2;
    this.id = counter++;
    element.append("<canvas id=this.id width='200' height='100'></canvas>");




  }
}


//main

var con = new container($(".pickMe"), "red", "blue");
$("#1").attr("backgraoundColor" , "yellow");
