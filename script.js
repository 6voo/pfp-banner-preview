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
    var profilePictureElement = document.querySelector(".pfp")

    /*
    elementBody.classList.toggle("light-mode");
    titleElement.classList.toggle("light-mode");
    chooseProfilePictureElement.classList.toggle("light-mode");
    profilePictureFileElement.classList.toggle('light-mode');
    chooseBannerElement.classList.toggle('light-mode');
    */

    // for smooth transition
    elementBody.classList.add('body-light-mode')
    elementBody.classList.remove('body-dark-mode', 'body-dark-mode2')

    titleElement.classList.add('body-light-mode')
    titleElement.classList.remove('body-dark-mode', 'body-dark-mode2')

    chooseProfilePictureElement.classList.remove('body-light-mode', 'body-dark-mode2')
    chooseProfilePictureElement.classList.add('body-dark-mode')

    profilePictureFileElement.classList.remove('body-light-mode', 'body-dark-mode2')
    profilePictureFileElement.classList.add('body-dark-mode')

    chooseBannerElement.classList.remove('body-light-mode', 'body-dark-mode2')
    chooseBannerElement.classList.add('body-dark-mode')

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

    // border color
    setTimeout(function () {
        profilePictureElement.style.borderColor = window.getComputedStyle(elementBody).backgroundColor;
    }, 500);
}
function toggleDarkMode() {
    var elementBody = document.body;
    var titleElement = document.getElementById("mainTitle"); // to change the title colour as well
    var chooseProfilePictureElement = document.getElementById("choosePfp");
    var chooseBannerElement = document.getElementById("chooseBanner");
    var profilePictureFileElement = document.getElementById("pfp");
    var profilePictureElement = document.querySelector(".pfp")

    /*
    elementBody.classList.toggle("dark-mode"); // yes, i changed this to elementBody
    titleElement.classList.toggle("dark-mode");
    chooseProfilePictureElement.classList.toggle("dark-mode");
    chooseBannerElement.classList.toggle('dark-mode');
    profilePictureFileElement.classList.toggle('dark-mode');
    */

    // for smooth transition
    elementBody.classList.remove('body-light-mode', 'body-dark-mode2')
    elementBody.classList.add('body-dark-mode')

    titleElement.classList.remove('body-light-mode', 'body-dark-mode2')
    titleElement.classList.add('body-dark-mode')

    chooseProfilePictureElement.classList.remove('body-light-mode', 'body-dark-mode2')
    chooseProfilePictureElement.classList.add('body-dark-mode')

    chooseBannerElement.classList.remove('body-light-mode', 'body-dark-mode2')
    chooseBannerElement.classList.add('body-dark-mode')

    profilePictureFileElement.classList.remove('body-light-mode', 'body-dark-mode2')
    profilePictureFileElement.classList.add('body-dark-mode')

    elementBody.classList.remove('light-mode', 'dark-mode2');
    elementBody.classList.add('dark-mode');
    titleElement.classList.remove('light-mode', 'dark-mode2');
    titleElement.classList.add('dark-mode');
    chooseProfilePictureElement.classList.remove('light-mode', 'dark-mode2');
    chooseProfilePictureElement.classList.add('dark-mode');
    chooseBannerElement.classList.remove('light-mode', 'dark-mode2');
    chooseBannerElement.classList.add('dark-mode');
    profilePictureFileElement.classList.remove('light-mode', 'dark-mode2');
    profilePictureFileElement.classList.add('dark-mode')

    // border color
    setTimeout(function () {
        profilePictureElement.style.borderColor = window.getComputedStyle(elementBody).backgroundColor;
    }, 500);
}

function toggleDiscordDarkMode() {
    var elementBody = document.body;
    var titleElement = document.getElementById("mainTitle"); // to change the title colour as well
    var chooseBannerElement = document.getElementById("chooseBanner");
    var chooseProfilePictureElement = document.getElementById("choosePfp");
    var profilePictureFileElement = document.getElementById("pfp");
    var profilePictureElement = document.querySelector(".pfp")


    /*
    elementBody.classList.add("dark-mode2");
    titleElement.classList.toggle("dark-mode2");
    chooseProfilePictureElement.classList.toggle("dark-mode2");
    profilePictureFileElement.classList.toggle('dark-mode2');
    chooseBannerElement.classList.toggleDarkMode
    */

    // for smooth transition
    elementBody.classList.remove('body-light-mode', 'body-dark-mode')
    elementBody.classList.add('body-dark-mode2')

    titleElement.classList.remove('body-light-mode', 'body-dark-mode')
    titleElement.classList.add('body-dark-mode2')

    chooseBannerElement.classList.remove('body-light-mode', 'body-dark-mode')
    chooseBannerElement.classList.add('body-dark-mode2')

    chooseProfilePictureElement.classList.remove('body-light-mode', 'body-dark-mode')
    chooseProfilePictureElement.classList.add('body-dark-mode2')

    profilePictureFileElement.classList.remove('body-light-mode', 'body-dark-mode')
    profilePictureFileElement.classList.add('body-dark-mode2')

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

    // border color
    setTimeout(function () {
        profilePictureElement.style.borderColor = window.getComputedStyle(elementBody).backgroundColor;
    }, 500);
}

function toggleOverlayProfilePicture() {
    var pfpElement = document.getElementById("pfp-preview");
    pfpElement.classList.toggle("overlay-pfp");
}

// border toggle button
var isBorderEnabled = true

function toggleBorder() {
    isBorderEnabled = !isBorderEnabled
    updateborderStyle()
}

function updateborderStyle() {
    var profilePictureElement = document.getElementById("pfp-preview")
    var bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor

    if (isBorderEnabled) {
        profilePictureElement.style.border = "8px solid " + bodyBackgroundColor
    } else {
        profilePictureElement.style.border = "none"
    }
}
