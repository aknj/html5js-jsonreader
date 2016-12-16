window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', e => {
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = (e => {
      fileDisplayArea.value = reader.result;

      var data = JSON.parse(reader.result);
      data.forEach(item => {
        console.log(item.age);
      } )
		});
    reader.readAsText(file);

	});

  // after clicking submit
  var submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', e => {
    var resultsSection = document.getElementById('results');

    var mode = document.querySelector('input[name=mode]:checked').value;

    // if (mode === "2") {
    //   zadanie2();
    // } else if (mode === "3") {
    //   zadanie3();
    // } else if (mode === "4") {
    //   var minId = document.getElementById('minId').value;
    //   // TO DO: checking if value is numerical? is this needed?
    //   zadanie4(minId);
    // }

    function makeFunc() {
      var minId = document.getElementById('minId').value;
      function executeJob() {
        console.log('tajne tajne', mode, minId);
      }
      return executeJob;
    }

    var myFunc = makeFunc();
    myFunc();
  });


}

// function zadanie2() {
//
// }
