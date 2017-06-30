(function (params) {
  var contentSelector = '.vtbegenerated';

  function extractQuestionText(questionRow) {
    var content = questionRow.querySelector(contentSelector);

    return content.hasChildNodes() ? content.firstChild.textContent : null;
  }

  function extractAnswerText(answerRow) {
    var children = answerRow.querySelectorAll('table');

    if (children.length >= 2) {
      var content = children[1].querySelector(contentSelector);

      return content.hasChildNodes() ? content.firstChild.textContent : null;
    }
  }


  var results = [];

  var questionTables = document.querySelectorAll('.details > table');

  var questionNumber = 1;
  [].forEach.call(questionTables, function (table) {
    var rows = table.querySelectorAll(':scope > tbody > tr'),
      questionRow, answerRow;

    if (rows.length >= 3) {
      questionRow = rows[1];
      answerRow = rows[2];

      var question = extractQuestionText(questionRow);
      var answer = extractAnswerText(answerRow);

      if (question && answer) {
        results.push([question, answer]);
      } else {
        alert('Could not extract question and answer for question #' + questionNumber);
      }
    }

    questionNumber++;
  });

  return results;
})();
