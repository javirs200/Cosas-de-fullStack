document.querySelector('button').addEventListener('click', function() {
    let boxes = document.querySelectorAll('.box')
    for (const b of boxes) {
        b.classList.toggle('flipped')
    }
  });