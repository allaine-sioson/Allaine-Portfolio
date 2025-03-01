const profile = document.getElementById("profile");
const experiences = document.getElementById("experiences");
const awards = document.getElementById("awards");
const projects = document.getElementById("projects");
const credits = document.getElementById("credits");

const bg = document.getElementById("main");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const title = document.getElementById("title");

const java = document.getElementById("java");
const python = document.getElementById("python");
const arduino = document.getElementById("arduino");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");

const right = document.getElementById("right");

const glow = document.getElementById('glow');

document.body.onpointermove = event => {
	const { x, y } = event;
	
	glow.animate({
		left: `${x}px`,
		top: `${y}px`
	}, {
		duration: 3000,
		fill: 'forwards'
	});
}
// Function to hide the .right div (fade out and scale down)
function hideInfo() {
    // Adding a small delay to allow the fade-out effect before the content is replaced
    right.classList.remove('active');
    setTimeout(() => {
        right.style.opacity = '0';  // Set opacity to 0 for fade-out effect
    }, 200);  // 200ms delay before starting fade-out
}

// Function to activate the .right div with animation (fade in)
function showInfo() {
    right.style.opacity = '1';  // Ensure opacity is 1 when showing content
    right.classList.add('active');
}

function changeFontToHeaderStyle(text) {
    text.style.fontFamily = "hyperlinkFont";
    text.style.fontSize = "150%";
    text.style.color = "var(--subheader-color)";
    text.style.textShadow = "2px 2px 5px rgb(220, 176, 30), 2px 2px 5px rgb(40, 32, 2)";
}

function changeFontToRegularStyle(text) {
    text.style.fontFamily = "headerFont";
    text.style.fontSize = "200%";
    text.style.color = "var(--header-color)";
    text.style.textShadow = "2px 2px 5px rgb(192, 148, 5)";
    text.style.marginLeft = "0px";
}

function displayProfile() {
    hideInfo(); // Hide previous content

    // Wait for fade-out to finish before showing new content
    setTimeout(() => {
        showInfo(); // Show the new section (fade-in)
        changeFontToHeaderStyle(text1);
        text1.style.fontSize = "200%";
        text1.innerHTML = "Hello! Welcome to my Portfolio.";
        changeFontToRegularStyle(text2);
        text2.innerHTML = "My name is Allaine Sioson and I am an aspiring UI/UX Designer and App developer.<br><br>I currently have a couple projects that I am working on which you may find in the Projects section of this website.<br><br>Languages I use:";

        // Update image sources
        java.src = "images/java.png";
        python.src = "images/python.png";
        arduino.src = "images/arduino.png";
        html.src = "images/html.png";
        css.src = "images/css.png";
        js.src = "images/js.png";
    }, 500); // 500ms delay before the new content is displayed after fade-out
}

function displayExperiences() {
    hideInfo(); // Hide previous content

    // Wait for fade-out to finish before showing new content
    setTimeout(() => {
        showInfo(); // Show the new section (fade-in)
        changeFontToHeaderStyle(text1);
        text1.innerHTML = "IOS App Developer<br>Career Education Council (Co-op)<br>Jul 2024 - Jul 2024";
        changeFontToRegularStyle(text2);
        text2.style.marginLeft = "50px";
        text2.innerHTML = "I worked in the 'Develop The Future' program where I was tasked with completing various Swift playgrounds, creating wireframes and prototypes, researching different app concepts and creating an app pitch presentation at the end of the program. During my time at this placement, I have gained the skills to use the Swift programming language while simultaneously learning the XCode program.<br><br> Responsibilities :<br><br> - Attend daily meetings<br> - Complete weekly tasks assigned (e.g., Playgrounds, Apps, Planners)<br> - Participate in creative workshops<br> - Create wireframes<br> - Develop Apps";

        // Remove image sources for experiences
        java.src = "";
        python.src = "";
        arduino.src = "";
        html.src = "";
        css.src = "";
        js.src = "";
    }, 500); // 500ms delay before the new content is displayed after fade-out
}

function displayProjects() {
    hideInfo(); // Hide previous content

    // Wait for fade-out to finish before showing new content
    setTimeout(() => {
        showInfo(); // Show the new section (fade-in)
        changeFontToRegularStyle(text1);
        text1.innerHTML = "Placeholder Text";

        text2.innerHTML = "";

        // Remove image sources for projects
        java.src = "";
        python.src = "";
        arduino.src = "";
        html.src = "";
        css.src = "";
        js.src = "";
    }, 500); // 500ms delay before the new content is displayed after fade-out
}

// Add event listeners to buttons
profile.addEventListener('click', () => {
    displayProfile();
});

experiences.addEventListener('click', () => {
    displayExperiences();
});

projects.addEventListener('click', () => {
    displayProjects();
});