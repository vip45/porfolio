document.addEventListener("DOMContentLoaded", function () {
  const targetText = "Crafting smart design for digital products for ";
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const flippingText = document.getElementById("flipping-text");
  const changingText = document.getElementById("changing-text");

  const rotatingWords = [
    "startups",
    "creators",
    "innovators",
    "unicorns",
    "bold ideas",
  ];

  let revealed = Array(targetText.length).fill(false);
  let displayArray = Array(targetText.length).fill("");
  let revealIndex = 0;

  function randomChar() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function animate() {
    for (let i = 0; i < targetText.length; i++) {
      if (revealed[i]) {
        displayArray[i] = targetText[i];
      } else {
        displayArray[i] = targetText[i] === " " ? " " : randomChar();
      }
    }
    flippingText.textContent = displayArray.join("");

    if (revealIndex < targetText.length) {
      revealed[revealIndex] = true;
      revealIndex++;
      setTimeout(animate, 100);
    } else {
      flippingText.textContent = targetText;
      startChangingText();
    }
  }

  function startChangingText() {
    let index = 0;
    changingText.textContent = rotatingWords[index];
    setInterval(() => {
      index = (index + 1) % rotatingWords.length;
      changingText.style.opacity = 0;
      setTimeout(() => {
        changingText.textContent = rotatingWords[index];
        changingText.style.opacity = 1;
      }, 300);
    }, 2000);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    "C++",
    "Data Structures",
    "Algorithms",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "Bootstrap",
    "jQuery",
    "REST APIs",
    "Docker",
    "Linux",
    "OOP",
    "Design Patterns",
    "Problem Solving",
    "Debugging",
    "Testing",
    "Webpack",
    "TypeScript",
    "GraphQL",
  ];

  const skillsTrack = document.getElementById("skills-track");

  function createSkillItem(text) {
    const span = document.createElement("span");
    span.className = "skill-item";
    span.textContent = text;
    return span;
  }

  // Duplicate skills for infinite loop illusion
  skills.forEach((skill) => skillsTrack.appendChild(createSkillItem(skill)));
  skills.forEach((skill) => skillsTrack.appendChild(createSkillItem(skill)));

  // Balloon pop effect
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("skill-item")) {
      const text = e.target.textContent;

      const clone = document.createElement("span");
      clone.textContent = text;
      clone.className = "skill-pop";
      document.body.appendChild(clone);

      setTimeout(() => {
        clone.remove();
      }, 1000); // matches animation duration
    }
  });
});

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove("hide");
  } else {
    // Scrolling down
    navbar.classList.add("hide");
  }

  prevScrollPos = currentScrollPos;
});
