var host = "&tag=beskarschmied-21&camp=4582&creative=670874&linkCode=ur1&adid=03MN9N1SRC0AG8BK6ADV&";

var link = "amazon.";

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    var tmp = tab.url;

    if(tmp.indexOf(host) == -1) {
      if(tmp.indexOf(link) > -1) {

        tmp += host;
        chrome.tabs.update(tabId, { url: tmp} );
      }
    }
  }
);
