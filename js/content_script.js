chrome.extension.onRequest.addListener(onRequest);

function onRequest(request, sender, callback)
{
    if(typeof request.action != 'undefined') {
        if(typeof window[request.action] == 'function') {
            window[request.action]();
        } else {
            // debug message
        }
    } else {
        // debug message
    }
}

function firePlayPause()
{
    var elem = document.getElementById('play');
    simulateClick(elem);
}

function firePrevious()
{
    var elem = document.getElementById('rw');
    simulateClick(elem);
}

function fireNext()
{
    var elem = document.getElementById('fw');
    simulateClick(elem);
}

function simulateClick(target) {
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null
  );

    return target.dispatchEvent(event);
}