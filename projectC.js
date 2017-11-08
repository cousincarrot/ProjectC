//TO DO

function animation(event){
    console.log("inside animation");

    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;



    document.getElementById("box").innerHTML = coords;

    function point(x, y, box){
      console.log("inside point");
      ctx.fillRect(10,10,1,1);
    }
    point();
};
