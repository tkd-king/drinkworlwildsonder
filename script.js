// The text will follow the path automatically using CSS property 'offset-path'
const text = document.querySelector(".scroll-text");
const path = document.querySelector("#motion-path");

text.style.offsetPath = 'path("' + path.getAttribute("d") + '")'; // Set the path for the text
const hoverActions = document.querySelectorAll(".footer_hover_action");
const borderUppers = document.querySelectorAll(".border_upper");

// Loop through all `.footer_hover_action` elements
hoverActions.forEach((hoverAction, index) => {
  const borderUpper = borderUppers[index]; // Match corresponding `.border_upper`

  hoverAction.addEventListener("mouseenter", () => {
    borderUpper.style.transform = "translateX(0)";
    borderUpper.style.transition = "transform 0.5s ease-out";
  });

  hoverAction.addEventListener("mouseleave", () => {
    borderUpper.style.transform = "translateX(-100%)";
    borderUpper.style.transition = "transform 0.5s ease-out";
  });
});
const totle_amount = document.querySelectorAll("#totle_amount");
const one_itme = document.querySelectorAll("#one_time");
const li_1 = document.querySelectorAll("#li_1");
const li_2 = document.querySelectorAll("#li_2");
const li_3 = document.querySelectorAll("#li_3");

function setupListeners(index, oneTimeAmount, totalAmount) {
  li_1[index].style.backgroundColor = "#2a317d";
  li_1[index].style.color = "white";

  li_1[index].addEventListener("click", () => {
    updateStyles(index, li_1, li_2, li_3);
    updateAmounts(index, oneTimeAmount[0], totalAmount[0]);
  });

  li_2[index].addEventListener("click", () => {
    updateStyles(index, li_2, li_1, li_3);
    updateAmounts(index, oneTimeAmount[1], totalAmount[1]);
  });

  li_3[index].addEventListener("click", () => {
    updateStyles(index, li_3, li_1, li_2);
    updateAmounts(index, oneTimeAmount[2], totalAmount[2]);
  });
}

function updateStyles(index, activeLi, inactiveLi1, inactiveLi2) {
  activeLi[index].style.backgroundColor = "#2a317d";
  activeLi[index].style.transition = "all 0.3s ease-in-out";
  activeLi[index].style.color = "white";

  inactiveLi1[index].style.backgroundColor = "white";
  inactiveLi1[index].style.color = "#2a317d";

  inactiveLi2[index].style.backgroundColor = "white";
  inactiveLi2[index].style.color = "#2a317d";
}

function updateAmounts(index, oneTime, total) {
  one_itme[index].innerHTML = oneTime;
  totle_amount[index].innerHTML = total;
}

// Data for each card
const amounts = [
  [" Rs.12,453.71", "Rs.24,907.42", " Rs.37,361.13"], // One-time amounts
  ["Rs.10,585.65", "Rs.21,171.30", "Rs.31,756.95"], // Total amounts
];

// Initialize listeners for each card
for (let i = 0; i < li_1.length; i++) {
  setupListeners(i, amounts[0], amounts[1]);
}

const li_1_1 = document.getElementById("li_1_1");
const li_2_2 = document.getElementById("li_2_1");
const li_3_3 = document.getElementById("li_3_1");
console.log("helo", li_1);

li_1_1.style.backgroundColor = "#2a317d";
li_1_1.style.color = "white";
li_1_1.addEventListener("click", () => {
  li_1_1.style.backgroundColor = "#2a317d";
  li_1_1.style.transition = "all 0.3s ease-in-out";
  li_1_1.style.color = "white";
  li_2_2.style.backgroundColor = "white";
  li_2_2.style.color = "#2a317d";
  li_3_3.style.backgroundColor = "white";
  li_3_3.style.color = "#2a317d";
});
li_2_2.addEventListener("click", () => {
  li_1_1.style.backgroundColor = "white";
  li_1_1.style.color = "#2a317d";
  li_2_2.style.backgroundColor = "#2a317d";
  li_2_2.style.transition = "all 0.3s ease-in-out";
  li_2_2.style.color = "white";
  li_3_3.style.backgroundColor = "white";
  li_3_3.style.color = "#2a317d";
});
li_3_3.addEventListener("click", () => {
  li_1_1.style.backgroundColor = "white";
  li_1_1.style.color = "#2a317d";
  li_2_2.style.backgroundColor = "white";
  li_2_2.style.color = "#2a317d";
  li_3_3.style.backgroundColor = "#2a317d";
  li_3_3.style.transition = "all 0.3s ease-in-out";
  li_3_3.style.color = "white";
});

// script.js
const testimonialsContainer = document.querySelector(".testimonials");
const testimonials = document.querySelectorAll(".testimonial");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0; // Reset to the first testimonial
  }
  const offset = -currentIndex * 100; // Calculate the offset for the slider
  testimonialsContainer.style.transform = `translateX(${offset}%)`;
});
prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0; // Reset to the first testimonial
  }
  const offset = -currentIndex * 100; // Calculate the offset for the slider
  testimonialsContainer.style.transform = `translateX(${offset}%)`;
});
const email = document.getElementById("email");
const submit = () => {
  alert(
    `hay us added\n thanks! \n__________________________________\n (${email.value})\n__________________________________`
  );
  console.log(email.value);
};
const button = document.querySelector(".newlatter_button");
button.addEventListener("click", submit);

const testimonialsContainer_2 = document.querySelector("#testimonials");
const testimonials_2 = document.querySelectorAll("#testimonial");
const nextButton_2 = document.querySelector(".next-button");
const prevButton_2 = document.querySelector(".prev-button");
const naveBg = document.querySelector('.navebar_wrapper')

let currentIndex_2 = 0;

nextButton_2.addEventListener("click", () => {
  currentIndex_2++;
  if (currentIndex_2 >= testimonials_2.length) {
    currentIndex_2 = 0; // Reset to the first testimonial
  }
  const offset = -currentIndex_2 * 100; // Calculate the offset for the slider
  testimonialsContainer_2.style.transform = `translateX(${offset}%)`;
});
prevButton_2.addEventListener("click", () => {
  currentIndex_2--;
  if (currentIndex_2 >= testimonials_2.length) {
    currentIndex_2 = 0; // Reset to the first testimonial
  }
  const offset = -currentIndex_2 * 100; // Calculate the offset for the slider
  testimonialsContainer_2.style.transform = `translateX(${offset}%)`;
});

const li_hover = document.querySelectorAll("#nav_hover");
const li_hover_svg = document.querySelectorAll("#li_hover_svg")
console.log(li_hover[0],"what");

const drop_down = document.querySelector(".header_hover_one");
const drop_down_li = document.querySelectorAll("#header_li_1");
const right_side_dive = document.querySelector(".header_hover_right");
console.log(
  "yay right side h ",
  document.querySelector(".header_hover_right").innerHTML
);
const displayDropDown = () => {
  naveBg.style.backgroundColor = "rgba(255, 255, 255, 0.685)"
  drop_down.style.visibility = "visible";
  drop_down.style.opacity = "1";
  li_hover_svg.style.rotate = "180deg";
  //code here
};
const hideDropDown = () => {
  naveBg.style.backgroundColor = " #30c0f000 "
  drop_down.style.visibility = "hidden";
  drop_down.style.opacity = "0";
  li_hover_svg.style.rotate = "-180deg";

  //code here
};
const changeInnerHtmlDropDwonAndStyle_1 = () => {
  drop_down_li[0].style.color = "#e21b79"
  drop_down_li[1].style.color = "#2A317D"
  drop_down_li[2].style.color = "#2A317D"
  right_side_dive.innerHTML = `
     <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Variety_Pack_-_Shark_Tank_2_540x_best_seller.webp" alt="drop down image">
     <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Variety_Pack_-_6_Flavors_12_Cans_2_540x_best_seller.webp" alt="drop down image">
     <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/VarietyPack-BotanicalBundle_540x_best_seller.webp" alt="drop down image">
       `;

    };
const changeInnerHtmlDropDwonAndStyle_2 = () => {
  drop_down_li[0].style.color = "#2A317D"
  drop_down_li[1].style.color = "#e21b79"
  drop_down_li[2].style.color = "#2A317D"
  right_side_dive.innerHTML = ` 
    <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Raspberry_1_540x_best_seller.webp" alt="drop down image">
    <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Strawberry_1_420x.webp" alt="drop down image">
    <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Pineapple_1_green_420x.webp" alt="drop down image">
      `;

};
const changeInnerHtmlDropDwonAndStyle_3 = () => {
  drop_down_li[0].style.color = "#2A317D"
  drop_down_li[1].style.color = "#2A317D"
  drop_down_li[2].style.color = "#e21b79"
  right_side_dive.innerHTML = ` 
     <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/Variety_Pack_-_6_Flavors_12_Cans_2_540x_best_seller.webp" alt="drop down image">
     <img style="width: 100%; border-radius: 30px; height: 250px; width: 250px;" src="/assets/VarietyPack-BotanicalBundle_540x_best_seller.webp" alt="drop down image">
       `;

};
console.log(addEventListener("mouseleave", ()=> alert('jello')));

li_hover[0].addEventListener("mouseenter", displayDropDown);
// li_hover[0].addEventListener("mouseleave", hideDropDown);
drop_down.addEventListener("mouseleave", hideDropDown);
drop_down_li[0].addEventListener(
  "mouseenter",
  changeInnerHtmlDropDwonAndStyle_1
);
drop_down_li[1].addEventListener(
  "mouseenter",
  changeInnerHtmlDropDwonAndStyle_2
);
drop_down_li[2].addEventListener(
  "mouseenter",
  changeInnerHtmlDropDwonAndStyle_3
);
