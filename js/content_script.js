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
    simulateClick('play');
}

function firePrevious()
{
    simulateClick('rw');
}

function fireNext()
{
    simulateClick('fw');
}

function simulateClick(targetId)
{
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null
  );

  var target = document.getElementById(targetId);
  if(target != null) {
      return target.dispatchEvent(event);
  } else {
      return false;
  }
}