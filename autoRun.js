console.log(1223)
chrome.runtime.sendMessage({ type: "contentLoaded" });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "contentLoaded") {
        chrome.storage.sync.get(['mmrDarkMode'], function(result) {
            if (result.darkMode) {
                chrome.tabs.executeScript(sender.tab.id, { file: 'appOn.js' });
            } else {
                chrome.tabs.executeScript(sender.tab.id, { file: 'appOff.js' });
            }
        });
    }
});
