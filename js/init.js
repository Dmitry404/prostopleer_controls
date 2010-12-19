var player_tab = null;

function getPlayerUrl()
{
    return 'http://prostopleer.com'; 
}

function isPlayerUrl(url)
{
    var player_url = getPlayerUrl();    
    if(url.indexOf(player_url) != 0) {
        return false;
    }
    
    return (url == player_url || url[player_url.length] == '/')
}

function init()
{
    chrome.tabs.getAllInWindow(undefined, function(tabs) {
        tabs.forEach(function(tab) {
            if(isPlayerUrl(tab.url)) {
                player_tab = tab; chrome.pageAction.show(tab.id)
            }
        });
        if(player_tab == null) {
            chrome.tabs.create({
                    index: 0,
                    url: getPlayerUrl()
                }, function(tab) {
                    player_tab = tab;
                }
            );
        }
    });

    initButtons();
}

function initButtons()
{
    document.getElementById('home').addEventListener(
        'click',
        function() {
            chrome.tabs.update(player_tab.id, {selected: true});
            window.close();
        },
        false);

    document.getElementById('prev').addEventListener(
        'click',
        function() {
            chrome.tabs.sendRequest(player_tab.id, {action: 'firePrevious'});
            window.close();
        },
        false);

    document.getElementById('next').addEventListener(
        'click',
        function() {
            chrome.tabs.sendRequest(player_tab.id, {action: 'fireNext'});
            window.close();
        },
        false);

    document.getElementById('play_pause').addEventListener(
        'click',
        function() {
            // todo
            chrome.tabs.sendRequest(player_tab.id, {action: 'firePlayPause'});
            window.close();
        },
        false);
}