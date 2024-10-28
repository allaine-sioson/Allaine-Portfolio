const profile = document.getElementById("profile");
const experiences = document.getElementById("experiences");
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


function displayProfile() {
    text1.style.fontFamily = "headerFont";
    text1.style.fontSize = "200%"
    text1.style.color = "var(--header-color)";
    text1.style.textShadow = "2px 2px 5px rgb(192, 148, 5)";
    text1.style.marginTop = "10%";

    text1.innerHTML = "Hello! Welcome to my Portfolio.<br><br>My name is Allaine Sioson and I am an aspiring UI/UX Designer and App developer.<br><br>I currently have a couple projects that I am working on which you may find in the Projects section of this website.<br><br>Languages I use:";

    text2.innerHTML = "";

    java.src= "images/java.png";
    python.src= "images/python.png";
    arduino.src= "images/arduino.png";
    html.src= "images/html.png";
    css.src= "images/css.png";
    js.src= "images/js.png";
}

function displayexperiences() {
    text1.style.fontFamily = "hyperlinkFont";
    text1.style.fontSize = "150%"
    text1.style.color = "var(--subheader-color)";
    text1.style.textShadow = "2px 2px 5px rgb(192, 148, 5), 2px 2px 5px rgb(40, 32, 2)";
    text1.style.marginTop = "7.5%";

    text1.innerHTML = "IOS App Developer<br>Career Education Council (Co-op)<br>Jul 2024 - Jul 2024";

    text2.innerHTML = "<br><br>I worked in the \"Develop The Future\" program where I was tasked with completing various Swift playgrounds, creating wireframes and prototypes, researching different app concepts and creating an app pitch presentation at the end of the program. During my time at this placement I have gained the skills to use the Swift programming language while simultaneously learning the XCode program.<br><br> Responsibilities :<br><br> - Attend daily meetings<br> - Complete weekly tasks assigned (e.g. Playgrounds, Apps, Planners)<br> - Participate in creative workshops<br> - Create wireframes<br> - Develop Apps";

    java.src= "";
    python.src= "";
    arduino.src= "";
    html.src= "";
    css.src= "";
    js.src= "";
    
}

function displayProjects() {
    text1.style.fontFamily = "headerFont";
    text1.style.fontSize = "200%"
    text1.style.color = "var(--header-color)";
    text1.style.textShadow = "2px 2px 5px rgb(192, 148, 5)";
    text1.style.marginTop = "10%";

    text1.innerHTML = "Placeholder Text";
    text2.innerHTML = "";

    java.src= "";
    python.src= "";
    arduino.src= "";
    html.src= "";
    css.src= "";
    js.src= "";
}

profile.addEventListener("mouseover", displayProfile);
experiences.addEventListener("mouseover", displayexperiences);
projects.addEventListener("mouseover", displayProjects);
// credits.addEventListener("mouseover", displayCredits);