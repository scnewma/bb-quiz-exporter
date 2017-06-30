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

function addQuestionDescriptor(results) {
  return results.map(function(a) {
    a[0] = 'T/F: ' + a[0];

    return a;
  });
}

function initDownload(results) {

  copyToClipboard(
    toTSV(
      addQuestionDescriptor(results[0])
    )
  );

  alert('Copied the quiz as TSV to the clipboard!')

}

chrome.runtime.onInstalled.addListener(function() {

  chrome.pageAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript({
      file: 'quiz-exporter.js'
    }, initDownload);

  });

});
