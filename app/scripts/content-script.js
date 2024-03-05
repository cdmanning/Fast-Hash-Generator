console.log("content-script.js is running!")

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request.messageID);
    copyTextToClipboard(request.messageID)
  }
);

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}

