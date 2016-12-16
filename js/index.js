window.onload = function() {
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

  /**
   * change event on the fileInput element
   */
  fileInput.addEventListener('change', e => {
    var uploadedFile = fileInput.files[0];
    readFile(uploadedFile, function(callback) {
      fileDisplayArea.value = callback;
      var dataAsText = callback;
    });

    /**
     * click event on the submitButton element
     * TO DO
     */
    submitButton.addEventListener('click', e => {
      var mode = document.querySelector('input[name=mode]:checked').value;
      console.log('click');
      readFile(uploadedFile, function(callback) {
        var dataAsText = callback;

        var data = JSON.parse(dataAsText);
        var results = [];

        if (mode === "2") {
          for (var i = 0; i < 10; i++) {
            let liElem = document.createElement('li');
            for (var key in data[i]) {
              liElem.textContent += (key + ": " + data[i][key] + " | ");
            }
            resultsSection.firstElementChild.append(liElem);
          }
        } else if (mode === "3") {

        } else if (mode === "4") {
          var minId = document.getElementById('minId').value;
        }

      });
    });
  });
}
