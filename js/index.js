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
    console.log('button clicked!');
  })
}
