const bar = document.getElementById("bar");
let yposn = 0;
let a = 0;

let xdir = 1,
  ydir = 1,
  velocity = 1,
  countPoints = 0;
let heighestScore = 0;
if (localStorage.getItem("heighestScore")) {
  heighestScore = parseInt(localStorage.getItem("heighestScore"));
}

document.addEventListener("keydown", function (event) {
  const keyPressed = event.key;//key press gareko key store garne

  if (
    (keyPressed === "ArrowUp" && (a = 1)) ||
    (keyPressed === "ArrowDown" && (a = -1))
  ) {
    yposn = yposn + a;
    bar.style.transform = `translateY(${-yposn * 3}dvh)`;
  } //arrow up down garda handle garne
});

bounce();
async function bounce() {
  const ball = document.getElementById("ball");
  let e, f, c, d;
  ball.style.transform = "translate(2dvw, 2dvh)";
  if (ball.style.transform) {
    [c, d] = ball.style.transform.slice(10, -1).split(", ");
    e = parseFloat(c.slice(0, -3));
    f = parseFloat(d.slice(0, -3));/* ball ko transform position line ani sclice etauti garera x ra y coords jhickne */
    const interval = setInterval(() => {
      if (e >= 95) {
        if (!(f > -yposn * 3 - 5 && f < -yposn * 3 + 17)) {
          displayWinPage();
          clearInterval(interval);
        } else {
          velocity += 0.1;//velocity harek iteration ma 0.1 badhne
          countPoints = Math.floor((velocity - 1) * 10);
          document.getElementById("display").innerText = `${countPoints}`;
        }
        let randint11 = 0.75 + Math.random() / 2;
        randint11 = Math.floor(randint11 * 100) / 100;
        xdir = -randint11;//xdir ko value random ma change garne ani 0.75 bata 1.25 samma ko value aauxa
      }
      if (f >= 95) {
        let randint11 = 0.775 + Math.random() / 2;
        randint11 = Math.floor(randint11 * 100) / 100;
        ydir = -randint11;
      }
      if (e <= 0) {
        let randint11 = 0.775 + Math.random() / 2;
        randint11 = Math.floor(randint11 * 100) / 100;
        xdir = randint11;
      }
      if (f <= 0) {
        let randint11 = 0.775 + Math.random() / 2;
        randint11 = Math.floor(randint11 * 100) / 100;
        ydir = randint11;
      }
      e = e + xdir * 0.1 * velocity;
      f = f + ydir * 0.1 * velocity;//ball ko position change garne
      ball.style.transform = `translate(${e}dvw,${f}dvh)`;
    }, 1);//1ms ko interval ma ball ko position change garne
  }
}
function displayWinPage() {//win page display garne
  let tempMsg;
  document.body.innerHTML = "";
  document.body.style.backgroundColor = "gray";
  heighestScore < countPoints
    ? ((tempMsg = "NEW HEIGHEST SCORE!"),
      localStorage.setItem("heighestScore", countPoints))
    : (tempMsg = "YOU LOST");//heighest score ko value check garne localsotrage ma store garne
  let winPage = `
            <div id="root1">
            <h1 id="tempH1">${tempMsg}</h1>
            <h3 id="tempH3">Score : ${countPoints}</h3>
            <div class="btn"><button id="tempBtn" onclick="restartGame();">Try Again</button><button id="tempBtn" onclick='../more.html'><a style="all:unset;" href="../more.html">Exit</a><button></div>
            </div>`;//win page ko html content
  document.body.innerHTML += winPage;
}

function restartGame() {
  location.reload();
}
