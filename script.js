var count = 0;
// stepcount();

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});
 
  document.querySelector("#step2").addEventListener("click", () => {
  changeCount(2);
});

document.querySelector("#step3").addEventListener("click", () => {
  changeCount(3);
});
document.querySelector("#step4").addEventListener("click", () => {
  changeCount(4);
});
document.querySelector("#step5").addEventListener("click", () => {
  changeCount(5);
});
document.querySelector("#step6").addEventListener("click", () => {
  changeCount(6);
});
document.querySelector("#step7").addEventListener("click", () => {
  changeCount(7);
});
document.querySelector("#step8").addEventListener("click", () => {
  changeCount(8);
});
document.querySelector("#step9").addEventListener("click", () => {
  changeCount(9);
});
changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}

