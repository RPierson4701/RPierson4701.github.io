
  var cats = document.querySelectorAll('.catPictures img');

  cats.forEach(function (cat) {
    cat.addEventListener('click', function () {
      var runner = document.createElement('div');
      runner.textContent = '🐈';
      runner.classList.add('running-cat');

      document.body.appendChild(runner);

      runner.addEventListener('animationend', function () {
        runner.remove();
      });
    });
  });
