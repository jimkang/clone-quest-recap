var nextButton = document.getElementById('next-button');
var stage = 0;

((function go() {
  nextButton.addEventListener('click', onNextClick);
})());

function onNextClick() {
  document.body.classList.remove(`stage-${stage}`);
  stage += 1;
  document.body.classList.add(`stage-${stage}`);
}
