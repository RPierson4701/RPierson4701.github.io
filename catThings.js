var cats = document.querySelectorAll('.catPictures img');

cats.forEach(function (cat) {
  cat.addEventListener('click', function () {
    var runner = document.createElement('div');
    runner.textContent = '🐈';
    runner.classList.add('running-cat');

    // temporarily remove animation
    runner.style.animation = 'none';

    document.body.appendChild(runner);

    // force browser to recalc layout so animation can trigger
    void runner.offsetWidth; // <-- THIS IS KEY

    // re-enable animation
    runner.style.animation = 'run-across 2s linear forwards';

    runner.addEventListener('animationend', function () {
      runner.remove();
    });
  });
});
