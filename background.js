function toCSV(arr) {

  return arr.map(function(a) {
    return a.join(',');
  }).join('\n');

}

function toTSV(arr) {
  return arr.map(function(a) {
    return a.join('\t');
  }).join('\n');
}

function copyToClipboard(text) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);

  input.value = text;
  input.focus();
  input.select();

  document.execCommand('Copy');

  input.remove();
}

function initDownload(results) {

  copyToClipboard(toTSV(results[0]));

  alert('Copied the quiz as TSV to the clipboard!')

}

chrome.runtime.onInstalled.addListener(function() {

  chrome.pageAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript({
      file: 'quiz-exporter.js'
    }, initDownload);

  });

});
