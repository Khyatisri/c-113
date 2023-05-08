function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    }
    
    function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill="blue"
    stroke="blue"
    circle(0,480,60)
    circle(640,480,60)
    circle(640,0,60)
    circle(0,0,60)
    rect(640,0,640,58)
    }
    
    function filter_tint(){
    tint_color=document.getElementById("color_name").value ;
    }
    
    function take_snapshot(){
      save("filterimg.png")  ;
    }
    