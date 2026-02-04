document.addEventListener('DOMContentLoaded', function() {
  var cats = document.querySelectorAll('.catPictures img');

  cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
      var runner = document.createElement('div');
      runner.textContent = '🐈';
      runner.classList.add('running-cat');

      // Append to body
      document.body.appendChild(runner);

      // Remove and re-add the class to restart animation
      runner.classList.remove('running-cat');
      void runner.offsetWidth; // force reflow
      runner.classList.add('running-cat');

      runner.addEventListener('animationend', function() {
        runner.remove();
      });
    });
  });
});
