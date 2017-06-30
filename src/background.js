var host = "amazon.de/?&tag=beskarschmied-21&camp=4582&creative=670874&linkCode=ur1&adid=03MN9N1SRC0AG8BK6ADV&";

var link = "amazon.";

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    var tmp = tab.url;

    if(tmp.indexOf(host) == -1) {
      if(tmp.indexOf(link) > -1) {

        if( isMainPage(tmp) ) {
          tmp = tmp.replace(link, host);
          chrome.tabs.update(tabId, { url: tmp} );
        }
      }
    }
  }
);

function isMainPage(url) {
  url = url.substring(url.indexOf(link), url.length);
  url = url.substring(url.indexOf("/") + 1, url.length);

  if(url.length !== 0) {
    return false;
  }

  return true;
}
