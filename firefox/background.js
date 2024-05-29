chrome.webNavigation.onCompleted.addListener(function(details) {
        


    if (details.frameId === 0) { // Check only on main frame
        const url = new URL(details.url);
        const isExcludedSite = url.hostname === 'user.blocksite.co' || url.hostname === 'thearcweb.com';
    
        if (!isExcludedSite) {
            chrome.tabs.sendMessage(details.tabId, { message: "checkForAdult" });
            setTimeout(() => {
                chrome.tabs.sendMessage(details.tabId, { message: "checkForAdult" });
            }, 60000); // After 60 seconds (1 minute)
        
            setTimeout(() => {
                chrome.tabs.sendMessage(details.tabId, { message: "checkForAdult" });
            }, 180000); // After 180 seconds (3 minutes)
        }
    }
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "adultContentFound") {
      // Handle redirection logic here
      console.log("adultContentFound", request.adultContent);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const tab = tabs[0];
          chrome.tabs.update(tab.id, { url: `moz-extension://942b7b36-d69a-4747-b94a-8c732019cc1a/blocked.html?site=${request.adultContent.replaceAll(" ", "_")}&blockType=category&category=adult&extension=custom` });
        }
      });
    }
  });