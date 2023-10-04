function sendImage() {
	const imageFileInput = document.getElementById("imageFile");
	const chatBox = document.getElementById("chatBox");

	if (imageFileInput.files.length > 0) {
		const file = imageFileInput.files[0];
		const reader = new FileReader();

		reader.onload = function (event) {
			const newImage = document.createElement("img");
			newImage.src = event.target.result;
			newImage.className = "user-message";

			chatBox.appendChild(newImage);
			imageFileInput.value = "";
		};

		reader.readAsDataURL(file);
	}
}
