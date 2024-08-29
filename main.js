var nextButton = document.getElementById('next-button');
var stage = 0;

var positionsForStages = {
  '1': {
    'mj-clone': 'translate(300, 250)',
    'awnzo1-clone': 'translate(500, 250)',
    'beffa': 'translate(700, 250)',
    'eunice': 'translate(300, 450)',
    'nettie': 'translate(500, 450)',
    'omom': 'translate(700, 450)',
    'mj': 'translate(75, 125)',
    'nettie-clone': 'translate(975, 400)',
    'eunice-clone': 'translate(975, 125)',
    'omom-clone': 'translate(975, 675)',
    'awnzo1': 'translate(75, 400)',
    'beffa-clone': 'translate(75, 675)',
  },
  '3': {
    // 'mj': 'translate(50, 75)',
    // 'mj-clone': 'translate(300, 250)',
    // 'awnzo1-clone': 'translate(50, 350)',
    // 'awnzo1': 'translate(500, 225)',
    // 'beffa': 'translate(700, 225)',
    // 'eunice': 'translate(950, 75)',
    // 'eunice-clone': 'translate(300, 450)',
    // 'nettie': 'translate(950, 350)',
    // 'nettie-clone': 'translate(500, 450)',
    // 'omom': 'translate(700, 450)',
    // 'omom-clone': 'translate(950, 625)',
    // 'beffa-clone': 'translate(50, 625)',
    'mj': '50, 75',
    'mj-clone': '300, 250',
    'awnzo1-clone': '50, 350',
    'awnzo1': '500, 225',
    'beffa': '700, 225',
    'eunice': '950, 75',
    'eunice-clone': '300, 450',
    'nettie': '950, 350',
    'nettie-clone': '500, 450',
    'omom': '700, 450',
    'omom-clone': '950, 625',
    'beffa-clone': '50, 625',
  }
};

((function go() {
  nextButton.addEventListener('click', onNextClick);
})());

function onNextClick() {
  document.body.classList.remove(`stage-${stage}`);
  stage += 1;
  document.body.classList.add(`stage-${stage}`);

  if (stage === 3) {
    animateShuffle(3);
  }
}

function animateShuffle(stage) {
  var transformsById = positionsForStages[stage];
  for (let id in transformsById) {
    let animateNode = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    let group = document.getElementById(id);
    animateNode.setAttribute('attributeName', 'transform');
    animateNode.setAttribute('attributeType', 'XML');
    animateNode.setAttribute('type', 'translate');
    animateNode.setAttribute('from', group.getAttribute('transform').replace('translate(', '').replace(')', ''));
    animateNode.setAttribute('to', `${transformsById[id]}`);
    animateNode.setAttribute('begin', '3s');
    animateNode.setAttribute('dur', '10s');
    animateNode.setAttribute('fill', 'freeze');
    group.append(animateNode);
  }
}
