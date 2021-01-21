/*strong element와 text 노드를 생성해서 DOM에 추가*/
document.querySelector("#A").innerHTML = "<strong>Hi</strong>";

/* div element와 text 노드를 생성해서 기존의 <span id="B"></span> 를 바꾼다. */
document.querySelector("#B").outerHTML =
  "<div id='B' class='new'>Whats Shaking</div>";

/* Text 노드를 생성해서 div#C를 갱신한다. */
document.getElementById("C").textContent = "dude";

/* 비표준 확장 */
document.getElementById("D").innerText = "Keep it";

document.getElementById("E").outerText = "real";
