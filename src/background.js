var affiliateTag = "tag=beskarschmied-21";
var amazonAddress = "amazon.de";

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		var tabUrl = tab.url;
		if(tabUrl.indexOf(affiliateTag) === -1) {
			if(tabUrl.indexOf(amazonAddress) > -1) {
				chrome.storage.local.get("lastTime", function(data){
					var lastTime = isNaN(data.lastTime) ? null : new Date(parseInt(data.lastTime));
					var currentTime = new Date();
					console.log(currentTime);
					console.log(lastTime);
					console.log(currentTime.getTime() - lastTime.getTime());
					if(lastTime === null || (currentTime.getTime() - lastTime.getTime()) > (20 * 60 * 1000)){
						if(tabUrl.indexOf("?") === -1) {
							tabUrl += "&" + affiliateTag;
						} else {
							tabUrl += "?" + affiliateTag;
						}
						chrome.storage.local.set({'lastTime': +new Date()});
						chrome.tabs.update(tabId, { url: tabUrl} );
					}
				});
			}
		}
	}
);
