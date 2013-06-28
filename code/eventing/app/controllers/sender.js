var ctr = 0;
function sendEvent(e) {
  e.message = 'I sent ' + ++ctr + ' event' + (ctr > 1 ? 's' : '') + '!';
  $.trigger('sendEvent', e);
}