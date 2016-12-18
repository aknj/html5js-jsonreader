/* global buildHtmlTable */

document.addEventListener('DOMContentLoaded', function(event) {
  let fileInput = document.getElementById('fileInput');
  let fileDisplayArea = document.getElementById('fileDisplayArea');
  let submitButton = document.getElementById('submitButton');
  let resultsSection = document.getElementById('results');

  function readFile(file, fn) {
    let reader = new FileReader();
    reader.onload = function(e) {
      fn(reader.result);
    };
    reader.readAsText(file);
  }

  function clear() {
    while (resultsSection.hasChildNodes()) {
      resultsSection.removeChild(resultsSection.lastChild, false);
    }
  }

  function displayTableElem(json) {
    let tableElem = buildHtmlTable(json);
    resultsSection.firstChild ?
      resultsSection.firstChild.replaceWith(tableElem) :
      resultsSection.appendChild(tableElem);
  }

  function displayValue(value) {
    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode(value));
    resultsSection.appendChild(pElem);
  }

  /**
   * change event on the fileInput element
   */
  fileInput.addEventListener('change', e => {
    clear();
    let uploadedFile = fileInput.files[0];
    readFile(uploadedFile, dataAsText => {
      fileDisplayArea.value = dataAsText;
      /**
       * click event on the submitButton element
       */
      submitButton.addEventListener('click', e => {
        let mode = document.querySelector('input[name=mode]:checked').value;
        clear();

        let data = JSON.parse(dataAsText);
        let results = [];

        if (mode === '2') {
          for (let i = 0; i < 10; i++) { results.push(data[i]); }
          displayTableElem(results);

        } else if (mode === '3') {
          displayValue(data.length);

        } else if (mode === '4') {
          let minId = document.getElementsByName('minId')[0].value;
          for (let item of data) {
            if (item.id > minId) {
              results.push(item);
            }
            results.sort( (a, b) => a.id - b.id );
          }
          displayTableElem(results);

        } else if (mode === '6') {
          let names = [];
          for (let obj of data) {
            names.push(obj.name);
          }
          let results = [...new Set(names)].map(x => {
            let obj = {};
            obj['name'] = x;
            obj['number of occurrences'] = names.filter(y => y === x).length;
            return obj;
          });
          results = results.filter(item => item['number of occurrences'] > 1);
          results.sort( (b, a) =>
            a['number of occurrences'] - b['number of occurrences'] );
          displayTableElem(results);

        }
      });
    });
  });
});
