var nextButton = document.getElementById('next-button');
var stage = 0;
const radius = 75;

var positionsForStages = {
  '5': {
    'mj': '50, 75',
    'mj-clone': '300, 250',
    'awnzo1': '500, 225',
    'awnzo1-clone': '50, 350',
    'beffa': '700, 225',
    'beffa-clone': '50, 625',
    'eunice': '950, 75',
    'eunice-clone': '300, 450',
    'nettie': '950, 350',
    'nettie-clone': '500, 450',
    'omom': '700, 450',
    'omom-clone': '950, 625',
  },
  '7': {
    'mj': '300, 250',
    'mj-clone': '50, 75',
    'awnzo1': '500, 225',
    'awnzo1-clone': '50, 350',
    'beffa': '700, 225',
    'beffa-clone': '50, 625',
    'eunice': '950, 75',
    'eunice-clone': '300, 450',
    'nettie': '950, 350',
    'nettie-clone': '500, 450',
    'omom': '950, 625',
    'omom-clone': '700, 450',
    'ken': '490, 800',
    'ken-clone': '600, 350',
  },
};

var audio;

((function go() {
  audio = new Audio('The-Entertainer-sting.mp3');
  nextButton.addEventListener('click', onNextClick);
})());

function onNextClick() {
  document.body.classList.remove(`stage-${stage}`);
  stage += 1;
  document.body.classList.add(`stage-${stage}`);

  var transformsById = positionsForStages[stage];
  if (transformsById) {
    audio.play();
    animateShuffle(transformsById);
  }
  if (stage === 9) {
    audio.play();
    let cloneGroups = document.querySelectorAll('.clone');
    for (let i = 0; i < cloneGroups.length; ++i) {
      explode(cloneGroups[i]);
    }
  }
}

function animateShuffle(transformsById) {
  for (let id in transformsById) {
    let animateNode = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    let group = document.getElementById(id);
    animateNode.setAttribute('attributeName', 'transform');
    animateNode.setAttribute('attributeType', 'XML');
    animateNode.setAttribute('type', 'translate');
    animateNode.setAttribute('from', group.getAttribute('transform').replace('translate(', '').replace(')', ''));
    animateNode.setAttribute('to', `${transformsById[id]}`);
    animateNode.setAttribute('dur', '5s');
    animateNode.setAttribute('fill', 'freeze');
    group.append(animateNode);
    animateNode.beginElement();
    setTimeout(() => group.setAttribute('transform', `translate(${transformsById[id]})`), 5000);
  }
}

function explode(group) {
  // var transform = group.getAttribute('transform');
  // var center = /\((\d+),\s*(\d+)\)/.exec(transform).slice(1).map(s => +s + radius);
  var center = [radius, radius];

  let pathGroup = group.querySelector('.explosion');
  
  for (let i = 0; i < 50; ++i) {
    let theta = Math.random() * 2 * Math.PI;
    let theta2 = Math.random() * 2 * Math.PI;
    let pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    if (Math.random * 2 < 1) {
      pathNode.setAttribute('x1', center[0]);
      pathNode.setAttribute('y1', center[1]);
    } else {
      pathNode.setAttribute('x1', center[0] + Math.cos(theta2) * radius);
      pathNode.setAttribute('y1', center[1] + Math.sin(theta2) * radius);
    }
    pathNode.setAttribute('x2', center[0] + Math.cos(theta) * radius);
    pathNode.setAttribute('y2', center[1] + Math.sin(theta) * radius);
    pathNode.setAttribute('stroke', `hsl(${Math.random() * 50 + 10}, 100%, 60%)`);
    pathGroup.append(pathNode);
  }

  // pathGroup.setAttribute('transform-origin', radius + ' ' + radius);
  // pathGroup.setAttribute('transform', 'scale(0.1)');

  // group.classList.add('exploding');
  // setTimeout(() => {
  //   group.classList.remove('exploding');
    group.classList.add('exploded');
  // },
  //   2000);
} 
