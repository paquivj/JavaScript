var g=0;
var check=false;
var un=1;

function setup (){
createCanvas(197,152);
	

}
function draw(){
	g=g+un;
	if(g==0){
		check=true;

	}
	if(g==90){
		check=true;
	}
	if(check==false){
		un=1;
	}
	else{
		un=-1
	}
	background(0,169,215);
	for(var posx=0;posx<197; posx=posx+10){
		for(var posy=0; posy<height; posy=posy+10){
		stroke(random (155), 255,0);
		push();
		translate(posx, posy);
		scale(0.5);
		rotate(radians(g));
			fill(0,250,250);
			ellipse(12,12,10,10);
			fill(214,0,153);
			rect(12,10,20,12);
			line(2,20,20,2);
			line(random (0.10),5, random(5),5);
		pop();
		}
	}
}