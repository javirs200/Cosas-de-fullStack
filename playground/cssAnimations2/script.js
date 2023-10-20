console.clear();


function CountdownTracker(label, value) {

  let span = document.createElement('span');

  span.className = 'flip-clock__piece';
  span.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
    '<span class="flip-clock__slot">' + label + '</span>';

  let top = span.querySelector('.card__top'),
    bottom = span.querySelector('.card__bottom'),
    back = span.querySelector('.card__back'),
    backBottom = span.querySelector('.card__back .card__bottom');

  update = function (val) {
    let currentValue = 0;
    val = ('0' + val).slice(-2);
    if (val !== currentValue) {

      if (currentValue >= 0) {
        back.setAttribute('data-value', currentValue);
        bottom.setAttribute('data-value', currentValue);
      }
      currentValue = val;
      top.innerText = currentValue;
      backBottom.setAttribute('data-value', currentValue);

      span.classList.remove('flip');
      void span.offsetWidth;
      span.classList.add('flip');
    }
  }

  update(value);
}

// Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  return {
    'Total': t,
    'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
    'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
    'Minutes': Math.floor((t / 1000 / 60) % 60),
    'Seconds': Math.floor((t / 1000) % 60)
  };
}

function getTime() {
  let t = new Date();
  return {
    'Total': t,
    'Hours': t.getHours() % 12,
    'Minutes': t.getMinutes(),
    'Seconds': t.getSeconds()
  };
}

function Clock(countdown, callback) {

  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function () { };

  let updateFn = countdown ? getTimeRemaining : getTime;

  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  let trackers = {},
    t = updateFn(countdown),
    key, timeinterval;

  for (key in t) {
    if (key === 'Total') { continue; }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.span.appendChild(trackers[key].el);
  }

  let i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);

    // throttle so it's not constantly updating the time.
    if (i++ % 10) { return; }

    let t = updateFn(countdown);
    if (t.Total < 0) {
      cancelAnimationFrame(timeinterval);
      for (key in trackers) {
        trackers[key].update(0);
      }
      callback();
      return;
    }

    for (key in trackers) {
      trackers[key].update(t[key]);
    }
  }

  setTimeout(updateClock, 500);
}

let deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
let c = new Clock(deadline, function () { alert('countdown complete') });
document.body.appendChild(c.el);

let clock = new Clock();
document.body.appendChild(clock.el);
