function previewImage(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.add('cropped-image');
        }
    
        reader.readAsDataURL(file);
    }
}

function toggleDarkMode() {
    var element = document.body
    element.classList.toggle("dark-mode");
}

function toggleOverlayProfilePicture() {
    var pfpElement = document.getElementById("pfp-preview");
    pfpElement.classList.toggle("overlay-pfp");
}
