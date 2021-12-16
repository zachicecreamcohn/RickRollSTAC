// this url will be compared to current tab. If they're equal, foreground.js is injected
var webstac_home = "https://acadinfo.wustl.edu/WSHome/Generic.aspx?Type=Home&Page=https://acadinfo.wustl.edu/apps/WebSTACHome/Default.aspx"

console.log(document)
let updateCounter = 0;

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        console.log("tab updated")
        console.log(updateCounter)
        updateCounter++;

        if (updateCounter > 3) {
            updateCounter = 0;
    // chrome.tabs.onActivated.addListener(tab => {
        current_tab_info = tab
            console.log(current_tab_info.url)
            if (webstac_home == current_tab_info.url) {
                chrome.tabs.insertCSS(null, {file: "./css/background.css"})

                chrome.tabs.executeScript(null, {
                    file: "./js/foreground.js"
                },
                    () => console.log("foreground.js injected"));
                

            } else {
                console.log("foreground.js NOT injected. Current tab is not webstac")
            }
        }

    });




    //on tab close, set updateCounter back to 0
    chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
        updateCounter = 0;
    });