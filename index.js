// AOS
AOS.init({
  duration: 1250,
});
//

// Button Animation

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    let overlay;

    let left = e.clientX - button.getBoundingClientRect().left;
    let top = e.clientY - button.getBoundingClientRect().y;
    overlay = document.createElement("span");
    overlay.style.cssText = `
  height: 450px;
	width: 450px;
	position: absolute;
	top: ${top}px;
	left: ${left}px;
	transform: translate(-50%, -50%) scale(0);
	background-color: #c69963;
	border-radius: 50%;
  z-index: -1;
  animation: button_animation 1s ease;
	animation-iteration-count: 1;
  `;
    overlay.addEventListener("animationend", (e) => {
      e.target.remove();
    });
    button.appendChild(overlay);
    console.log(left);
  });
});

//

// Toggle navigation
const triggers = document.getElementsByClassName("js-toggle-nav");
for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", function () {
    document
      .getElementsByClassName("navigation__container")[0]
      .classList.toggle("navigation__container--active");
  });
}

//
