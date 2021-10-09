"use strict";

$(document).ready(function () {
  var time = 900;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;

    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }

    secs = secs >= 10 ? secs : "0" + secs;
    $(".minutes").html(mins >= 10 ? mins : "0" + mins);
    $(".seconds").html(secs);
  }

  start_timer();
  var hash;
  var address = decodeURI(window.location.href);
  var hashes = window.location.href.slice(address.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');

    if (hash[0] == 'name') {
      document.getElementById('name').value = decodeURI(hash[1]);
    }

    if (hash[0] == 'email') {
      document.getElementById('email').value = hash[1];
    }
  }

  $('.basket__check-input').prop('checked', false);
  $('.basket__button').prop('disabled', true);
  $('.basket__check-input').click(function () {
    $('.basket__button').prop("disabled", !$('.basket__button').prop("disabled"));
  });
});