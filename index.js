var timer = 60;
var score = 0;
var Hitrn = 0;

function makebubble(){
    var clutter = "";

for( i = 1; i <= 152; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer
        }else{
            // clearInterval(timerint);
            // document.querySelector("#pbtm").innerHTML = `<h1>GameOver</h1><br><h2>Score:${score}</h2>`;
            clearInterval(timerint);
            var pbtmElement = document.querySelector("#pbtm");
            pbtmElement.innerHTML = `<h1>Game Over</h1><h2>Score: ${score}</h2>`;
            pbtmElement.style.display = "flex";
            pbtmElement.style.flexDirection = "column";    
            
            // Create a "Try Again" button
            var tryAgainButton = document.createElement("button");
            tryAgainButton.textContent = "Try Again";
            tryAgainButton.style.fontSize = "15px";
            tryAgainButton.style.padding = "10px 20px"; // Adjust padding as needed
            tryAgainButton.style.backgroundColor = " rgb(243, 145, 18)"; // Change background color
            tryAgainButton.style.color = "#fff"; // Change text color
            tryAgainButton.style.border = "none"; // Remove border
            tryAgainButton.style.borderRadius = "5px"; // Add border radius
            tryAgainButton.style.cursor = "pointer"; // Add pointer cursor
            tryAgainButton.addEventListener("click", function () {
                location.reload(); // Refresh the page when the button is clicked
            });

            // Append the button to the #pbtm element
            pbtmElement.appendChild(tryAgainButton);

        }
    },1000)
}

function newHit(){
    Hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = Hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednumber = (Number(dets.target.textContent));
    if(clickednumber === Hitrn){
        increaseScore();
        makebubble();
        newHit();
    }
})



runTimer();
makebubble();   
newHit();
