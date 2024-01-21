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

function toggleLightMode() {
    var elementBody = document.body;
    var titleElement = document.getElementById("mainTitle"); // to change the title colour as well
    var chooseBannerElement = document.getElementById("chooseBanner");
    var chooseProfilePictureElement = document.getElementById("choosePfp");
    var profilePictureFileElement = document.getElementById("pfp");

    /*
    elementBody.classList.toggle("light-mode");
    titleElement.classList.toggle("light-mode");
    chooseProfilePictureElement.classList.toggle("light-mode");
    profilePictureFileElement.classList.toggle('light-mode');
    chooseBannerElement.classList.toggle('light-mode');
    */

    elementBody.classList.add('light-mode');
    elementBody.classList.remove('dark-mode', 'dark-mode2');
    titleElement.classList.add('light-mode');
    titleElement.classList.remove('dark-mode', 'dark-mode2');
    chooseProfilePictureElement.classList.remove('dark-mode', 'dark-mode2');
    chooseProfilePictureElement.classList.add('light-mode');
    profilePictureFileElement.classList.remove('dark-mode', 'dark-mode2');
    profilePictureFileElement.classList.add('light-mode');
    chooseBannerElement.classList.remove('dark-mode', 'dark-mode2');
    chooseBannerElement.classList.add('light-mode'); // this is how i have to approach it so it works actually good. XD
    // it just removes the other classes and overrides it with lightmode 

}
function toggleDarkMode() {
    var bodyElement = document.body;
    var titleElement = document.getElementById("mainTitle"); // to change the title colour as well
    var chooseProfilePictureElement = document.getElementById("choosePfp");
    var chooseBannerElement = document.getElementById("chooseBanner");
    var profilePictureFileElement = document.getElementById("pfp");

    /*
    bodyElement.classList.toggle("dark-mode");
    titleElement.classList.toggle("dark-mode");
    chooseProfilePictureElement.classList.toggle("dark-mode");
    chooseBannerElement.classList.toggle('dark-mode');
    profilePictureFileElement.classList.toggle('dark-mode');
    */

    bodyElement.classList.remove('light-mode', 'dark-mode2');
    bodyElement.classList.add('dark-mode');
    titleElement.classList.remove('light-mode', 'dark-mode2');
    titleElement.classList.add('dark-mode');
    chooseProfilePictureElement.classList.remove('light-mode', 'dark-mode2');
    chooseProfilePictureElement.classList.add('dark-mode');
    chooseBannerElement.classList.remove('light-mode', 'dark-mode2');
    chooseBannerElement.classList.add('dark-mode');
    profilePictureFileElement.classList.remove('light-mode', 'dark-mode2');
    profilePictureFileElement.classList.add('dark-mode')
}

function toggleDiscordDarkMode() {
    var elementBody = document.body;
    var titleElement = document.getElementById("mainTitle"); // to change the title colour as well
    var chooseBannerElement = document.getElementById("chooseBanner");
    var chooseProfilePictureElement = document.getElementById("choosePfp");
    var profilePictureFileElement = document.getElementById("pfp");



    /*
    elementBody.classList.add("dark-mode2");
    titleElement.classList.toggle("dark-mode2");
    chooseProfilePictureElement.classList.toggle("dark-mode2");
    profilePictureFileElement.classList.toggle('dark-mode2');
    chooseBannerElement.classList.toggleDarkMode
    */

    elementBody.classList.remove('light-mode', 'dark-mode');
    elementBody.classList.add('dark-mode2');
    titleElement.classList.remove('light-mode', 'dark-mode');
    titleElement.classList.add('dark-mode2');
    chooseBannerElement.classList.remove('light-mode', 'dark-mode');
    chooseBannerElement.classList.add('dark-mode2');
    chooseProfilePictureElement.classList.remove('light-mode', 'dark-mode');
    chooseProfilePictureElement.classList.add('dark-mode2');
    profilePictureFileElement.classList.remove('light-mode', 'dark-mode');
    profilePictureFileElement.classList.add('dark-mode2')
}



function toggleOverlayProfilePicture() {
    var pfpElement = document.getElementById("pfp-preview");
    pfpElement.classList.toggle("overlay-pfp");
}
