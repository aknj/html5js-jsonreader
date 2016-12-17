document.addEventListener("DOMContentLoaded", function(event) {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');
  var submitButton = document.getElementById('submitButton');
  var resultsSection = document.getElementById('results');

  function readFile(file, fn) {
    var reader = new FileReader();
    reader.onload = function(e) {
      fn(reader.result);
    };
    reader.readAsText(file);
  }

  var clear = function() {
    while (resultsSection.hasChildNodes()) {
      resultsSection.removeChild(resultsSection.lastChild, false);
    }
  };

  var cos = function(json) {
    var tableElem = buildHtmlTable(json);
    resultsSection.firstChild ?
      resultsSection.firstChild.replaceWith(tableElem) :
      resultsSection.appendChild(tableElem);
  }

  /**
   * change event on the fileInput element
   */
  fileInput.addEventListener('change', e => {
    clear();
    var uploadedFile = fileInput.files[0];
    readFile(uploadedFile, function(dataAsText) {
      fileDisplayArea.value = dataAsText;
      /**
       * click event on the submitButton element
       */
      submitButton.addEventListener('click', e => {
        var mode = document.querySelector('input[name=mode]:checked').value;
        clear();

        var data = JSON.parse(dataAsText);
        var results = [];

        if (mode === "2") {
          for (var i = 0; i < 10; i++) { results.push(data[i]); }
          cos(results);

        } else if (mode === "3") {
          var _p = document.createElement('p');
          _p.append(document.createTextNode(data.length));
          resultsSection.appendChild(_p);
        } else if (mode === "4") {
          var minId = document.getElementById('minId').value;
          for (item of data) {
            if (item.id > minId) {
              results.push(item);
            }
            results.sort(function(a, b) { return a.id - b.id });
          }

          cos(results);
        }
      });
    });
  });
});
