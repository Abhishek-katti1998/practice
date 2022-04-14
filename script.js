const container = document.getElementsByClassName("container");
let arr1 = ["upper-circle", "right-circle", "bottom-circle", "left-circle"];
let arr2 = [
  "upper-circle-default",
  "right-circle-default",
  "bottom-circle-default",
  "left-circle-default",
];
function start(arr) {
  let i = 0;
  Array.from(container[0].children).forEach((e) => {
    e.children[0].classList.add(`${arr[i]}`);

    i++;
  });
}
function stop() {
  let i = 0;
  Array.from(container[0].children).forEach((e) => {
    e.children[0].classList.remove(`${arr1[i]}`);
    e.children[0].classList.add(`${arr2[i]}`);
    // console.log(arr[i]);
    i++;
  });
}
function startAnimation() {
  start(arr1);
}
function stopAnimation() {
  stop(arr2);
}
