window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var jsonType = /[a-z]+\/json/;

      //console.log(file);

			var reader = new FileReader();
      reader.onload = function(e) {
				fileDisplayArea.innerText = reader.result;

        var data = JSON.parse(reader.result);
        data.forEach( item => {
          console.log(item.age);
        } )
			}
      reader.readAsText(file);

		});
}
