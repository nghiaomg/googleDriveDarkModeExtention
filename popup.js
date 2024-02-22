const darkModeCheckbox = document.getElementById("darkmode-status");
let buttonOn = false;
if(darkModeCheckbox){
    darkModeCheckbox.addEventListener("change", async () => {
        if (!buttonOn) {
            buttonOn = true;
            chrome.storage.sync.set({ mmrDarkMode: true });
            chrome.tabs.executeScript({
                file: 'appOn.js'
            });
        } else {
            buttonOn = false;
            chrome.storage.sync.set({ mmrDarkMode: false });
            chrome.tabs.executeScript({
                file: 'appOff.js'
            });
        }
    });
}

chrome.storage.sync.get(['mmrDarkMode'], function(result) {
    if (result.mmrDarkMode) {
        darkModeCheckbox.checked = true;
        buttonOn = true;
        chrome.tabs.executeScript({
            file: 'appOn.js'
        });
    } else {
        darkModeCheckbox.checked = false;
        buttonOn = false;
        chrome.tabs.executeScript({
            file: 'appOff.js'
        });
    }
});

