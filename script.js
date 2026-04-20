function start(){
  document.getElementById("s1").classList.remove("active");
  document.getElementById("s2").classList.add("active");
  type();
  document.getElementById("music").play();
}

function next(n){
  document.getElementById("s"+n).classList.remove("active");
  document.getElementById("s"+(n+1)).classList.add("active");
}

/* Typewriter */
let text="Oye Sachin 😂\nAaj birthday apne suar ka... 😆\nEnjoy kar bhai 🔥";
let i=0;
function type(){
  if(i<text.length){
    document.getElementById("msg").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,40);
  }
}

/* Confetti */
function blast(){
  alert("🎉 Happy Birthday Bhai ❤️");
}

/* Hearts */
let c=document.getElementById("bg");
let ctx=c.getContext("2d");

c.width=window.innerWidth;
c.height=window.innerHeight;

let h=[];
for(let i=0;i<30;i++){
  h.push({x:Math.random()*c.width,y:Math.random()*c.height,s:Math.random()*6+3,v:Math.random()});
}

function draw(x,y,s){
  ctx.fillStyle="red";
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.bezierCurveTo(x-s,y-s,x-2*s,y+s,x,y+2*s);
  ctx.bezierCurveTo(x+2*s,y+s,x+s,y-s,x,y);
  ctx.fill();
}

function anim(){
  ctx.clearRect(0,0,c.width,c.height);
  h.forEach(o=>{
    o.y-=o.v;
    if(o.y<0)o.y=c.height;
    draw(o.x,o.y,o.s);
  });
  requestAnimationFrame(anim);
}
anim();