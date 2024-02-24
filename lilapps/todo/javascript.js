let address;
let p = [];
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todo")) {
    let l = JSON.parse(localStorage.getItem("todo"));
    l.forEach((element) => {
      let a = element["TO-DO"];
      let date = element.Due;
      document.getElementById(
        "holder"
      ).innerHTML += `<div id="tmpdiv" onmousedown="address=this"><p>${a}</p><p>Due: ${date}</p><button id='tmpbtn' onclick="del();">X</button></div>`;
    });
    p = l;
  }
});
function addi() {
  let jsoner;
  let a = document.getElementById("namer").value;
  let date = document.getElementById("dater").value;
  document.getElementById(
    "holder"
  ).innerHTML += `<div id="tmpdiv" onmousedown="address=this"><p>${a}</p><p>Due: ${date}</p><button id='tmpbtn' onclick="del();">X</button></div>`;

  p.push({ "TO-DO": a, Due: date });
  console.log(p);
  jsoner = JSON.stringify(p);
  localStorage.clear();
  console.log(jsoner);
  localStorage.setItem("todo", jsoner);
}

function del() {
  console.log(address.p.innerHTML);
  address.remove();
}
