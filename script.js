const glow = document.getElementById("glow");
const options = document.querySelectorAll("button");
const rightSide = document.getElementById("right-container"); 
const profileButton = document.getElementById("profile");

var currentlyDisplayed = "";

profileButton.style.color = "rgb(254, 242, 225)";
profileButton.style.textShadow = "2px 2px 10px rgba(255, 231, 151, 0.635)";
profileButton.style.transform = "translateX(-4vw)";
displayRightSideText("profile")

// glow follows cursor
document.body.onpointermove = event => {
    const { x, y } = event;
    if (glow) {
        glow.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 3000, fill: 'forwards' });
    }
};

options.forEach(currentOption => {
    currentOption.addEventListener("mouseover", () => {
        options.forEach(option => {
            option.style.color = "var(--regular-font-color)";
            option.style.textShadow = "2px 2px 5px rgb(192, 148, 5)";
            option.style.transform = "none";
        });

        currentOption.style.color = "rgb(254, 242, 225)";
        currentOption.style.textShadow = "2px 2px 10px rgba(255, 231, 151, 0.635)";
        currentOption.style.transform = "translateX(-4vw)";

        if (currentOption.id != currentlyDisplayed) {
            displayRightSideText(currentOption.id)
        }
    })
});

function displayRightSideText(id) {
    rightSide.style.opacity = "0";

    setTimeout(() => {
        rightSide.style.opacity = "1";
        if (id === "profile") {
            rightSide.innerHTML = "";
            // header
            const header = document.createElement("h1");
            header.textContent = "Hello, welcome to my Portfolio!";
            rightSide.appendChild(header);

            // subheader
            const subheader = document.createElement("h2");
            subheader.textContent = "My name is Allaine Sioson and I am an aspiring UI/UX Designer and App developer :].";
            rightSide.appendChild(subheader);

            // content1
            const content1 = document.createElement("h2");
            content1.textContent = "Programming Langauges I'm familiar with:";
            rightSide.appendChild(content1);

            // imgs
            const images = ["images/arduino.png", "images/css.png", "images/html.png", "images/java.png", "images/js.png", "images/python.png"];

            const imagesContainer = document.createElement("div");
            imagesContainer.style.marginLeft= "auto";
            imagesContainer.style.marginRight= "auto";

            images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.style.width = "6.5vw";
                imagesContainer.appendChild(img);
            });

            rightSide.appendChild(imagesContainer);

        } else if (id === "about-me") {
            rightSide.innerHTML = "";
            // education title
            const educationTitle = document.createElement("h1");
            educationTitle.textContent = "Education:";
            rightSide.appendChild(educationTitle);

            // education content
            const educationContent = document.createElement("h2");
            educationContent.textContent = "I'm currently studying for my Bachelors in Computer Science (Specialization in Mobile Computing). In highschool I competed in SKILLS Ontario for robotics and represented my school board for coding.";
            rightSide.appendChild(educationContent);

            // work title
            const workTitle = document.createElement("h1");
            workTitle.textContent = "Work:";
            rightSide.appendChild(workTitle);

            // work content 1
            const workContent1 = document.createElement("h2");
            workContent1.innerHTML = "> COOP: iOS App Developer (CEC)<br>July '24 - Aug '24";
            rightSide.appendChild(workContent1);

            // work content 2
            const workContent2 = document.createElement("h2");
            workContent2.innerHTML = "I worked in the \"Develop The Future\" program where I was tasked with completing various Swift playgrounds, creating wireframes and prototypes, researching different app concepts and creating an app pitch presentation at the end of the program.<br><br>Responsibilities : <br>- Attend daily meetings <br>- Complete weekly tasks assigned (e.g. Playgrounds, Apps, Planners) <br>- Participate in creative workshops <br>- Create wireframes <br>- Develop Apps";
            rightSide.appendChild(workContent2);

            // socials title
            const socialsTitle = document.createElement("h1");
            socialsTitle.innerHTML = "Socials";
            rightSide.appendChild(socialsTitle);

            // socials info
            const socialsInfo = document.createElement("h2");
            socialsInfo.innerHTML = "> linkedin: <a href= https://www.linkedin.com/in/allainesioson/> @Allaine Sioson </a><br>> github: <a href= https://github.com/allaine-sioson> @allaine-sioson </a>";
            rightSide.appendChild(socialsInfo);

            
        } else if (id === "competitions") {
            console.log(id);
            rightSide.innerHTML = "";
            // competition title 1
            const competitionTitle1 = document.createElement("h1");
            competitionTitle1.innerHTML = "SKILLS Regionals: 1st Place";
            rightSide.appendChild(competitionTitle1);

            // competition info
            const competitionInfo1 = document.createElement("h2");
            competitionInfo1.innerHTML = "> Create a program for managing accessibility devices (wheelchairs, braille, etc.)<br><br>Language Used: Java<br>Link To Program: <a href= https://github.com/allaine-sioson/Skills-Regionals-2025> Here! </a>";
            rightSide.appendChild(competitionInfo1);

            // competition title 2
            const competitionTitle2 = document.createElement("h1");
            competitionTitle2.innerHTML = "SKILLS Provincials: 6th Place";
            rightSide.appendChild(competitionTitle2);

            // competition info
            const competitionInfo2 = document.createElement("h2");
            competitionInfo2.innerHTML = "> Create a program for managing swim meets (events, times, ranks, etc)<br><br>Language Used: Java<br>Link To Program: soon";
            rightSide.appendChild(competitionInfo2);

        } else {
            rightSide.innerHTML = "";
            currentlyDisplayed = "";
        }
    }, 250)
    
    currentlyDisplayed = id;
}