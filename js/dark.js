
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeToggle1 = document.getElementById("dark-mode-toggle1");

function setThemePreference(themeIndex) {
	localStorage.setItem("theme", themeIndex);
}

function getThemePreference() {
	if (localStorage.getItem("theme") == 0) {
		return parseInt(localStorage.getItem("theme"));
	}
	return null;
}

var currentTheme = getThemePreference();

function toggleDarkMode() {
	if (currentTheme === 0) {
		const link = document.createElement("link");
		link.id = "dark-theme";
		link.rel = "stylesheet";
		link.href = "./css/dark.css";
		document.head.appendChild(link);
		darkModeToggle.src = "./icons/adjust.svg";
		darkModeToggle1.src = "./icons/adjust.svg";
	} else {
		const link = document.getElementById("dark-theme");
		if (link) {
			link.remove();
		}
		darkModeToggle.src = "./icons/adjust-dark.svg";
		darkModeToggle1.src = "./icons/adjust-dark.svg";
	}

	var url = window.location.href;
	if (url.indexOf("_contactUs") > -1) {
		const facebook = document.getElementById("facebook");
		const instagram = document.getElementById("instagram");
		const youtube = document.getElementById("youtube");
		const tiktok = document.getElementById("tiktok");

		if (currentTheme === 0) {
			facebook.src = "./icons/facebook.svg";
			instagram.src = "./icons/instagram.svg";
			youtube.src = "./icons/youtube.svg";
			tiktok.src = "./icons/tiktok.svg";
		} else {
			facebook.src = "./icons/facebook-dark.svg";
			instagram.src = "./icons/instagram-dark.svg";
			youtube.src = "./icons/youtube-dark.svg";
			tiktok.src = "./icons/tiktok-dark.svg";
		}
	} else if (url.indexOf("home") > -1) {
		const arrow = document.getElementById("arrow");

		if (currentTheme === 0) {
			arrow.src = "./icons/arrow-right-dark.svg";
		} else {
			arrow.src = "./icons/arrow-right.svg";
		}
	} else if (url.indexOf("gallary") > -1) {
		const backward = document.getElementById("backward");
		const forward = document.getElementById("forward");

		if (currentTheme === 0) {
			backward.src = "./icons/backward-dark.svg";
			forward.src = "./icons/forward-dark.svg";
		} else {
			backward.src = "./icons/backward.svg";
			forward.src = "./icons/forward.svg";
		}
	}
}

toggleDarkMode();

darkModeToggle.addEventListener("click", () => {
	if (currentTheme == 0) {
		currentTheme = 1;
	} else {
		currentTheme = 0;
	}
	toggleDarkMode();
	setThemePreference(currentTheme);
});

darkModeToggle1.addEventListener("click", () => {
	if (currentTheme == 0) {
		currentTheme = 1;
	} else {
		currentTheme = 0;
	}
	toggleDarkMode();
	setThemePreference(currentTheme);
});
