chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    copyTextToClipboard(request.messageID)
  }
);

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}