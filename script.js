function running(){
    var run = document.getElementById("run").value;
    var text = document.getElementById("text").value;

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var km = 0;
    hours = document.getElementById("hours").value;
    minutes = document.getElementById("minutes").value;
    seconds = document.getElementById("seconds").value;
    km = document.getElementById("km").value;

    var total = Number(hours)*3600 + Number(minutes)*60+Number(seconds);
    var average = Math.floor(total / Number(km));
    var avgSec = average%60;
    var avgMin = (average-avgSec) /60;
    var avgPace = "Average pace: " + avgMin+":" +avgSec;

    var runTime = " Duration: " +hours+":"+minutes+":"+seconds;
    var distance = "Distance: "+km;

    let today = new Date().toISOString().slice(0, 10)
    

    //Creating new elements and giving them values that we calculated and user gave us 

    var body = document.getElementsByTagName("body")[0];
    var lastdiv = document.getElementsByClassName("last");
    var newdiv = document.createElement("div");
    var newlist = document.createElement("ul");
    var lists = document.createElement("li");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    
    
    
    //var text = document.createTextNode( today+": "+run+"-"+ runTime+"h, "+distance+"km, "+avgPace+"Min/Km " +"Notes: "+text );
    var text1 = document.createTextNode( today+": "+run);
    var text2 = document.createTextNode(runTime+"h");
    var text3 = document.createTextNode(distance+"km");
    var text4 = document.createTextNode(avgPace+"Min/Km");
    var text5= document.createTextNode("Notes: "+text);
    newlist.appendChild(lists);
    p1.appendChild(text1);
    p2.appendChild(text2);
    p3.appendChild(text3);
    p4.appendChild(text4);
    p5.appendChild(text5);
    lists.appendChild(p1);
    lists.appendChild(p2);
    lists.appendChild(p3);
    lists.appendChild(p4);
    lists.appendChild(p5);


    newdiv.appendChild(newlist);
    //newdiv.appendChild(text);
    newdiv.classList.add("diary");
    body.appendChild(newdiv);
    body.insertBefore(newdiv,lastdiv);

    //testing
    //document.getElementById("test1").innerHTML = average;
    //document.getElementById("test1").innerHTML= run;
    //document.getElementById("test2").innerHTML= text;
    
    //document.getElementById("test1").innerHTML = avgPace;
    
    
}