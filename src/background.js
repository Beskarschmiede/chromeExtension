var host = "?&tag=beskarschmied-21&camp=4582&creative=670874&linkCode=ur1&adid=03MN9N1SRC0AG8BK6ADV&";
var timers = [];
var link = "amazon.";

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    var currentTime = Date();

    if(timers[tabId] == null || (currentTime - timers[tabId]) === (20 * 60 * 1000))
    {
      timers[tabId] = currentTime;

      var tmp = tab.url;
      if(tmp.indexOf(host) == -1) {
        if(tmp.indexOf(link) > -1) {
          tmp += host;
          chrome.tabs.update(tabId, { url: tmp} );
        }
      }
    }
  }
);
