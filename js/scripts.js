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
                player_tab = tab;                
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

    // todo
}