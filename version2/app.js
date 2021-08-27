//root ---------------------------------------
const root = document.createElement(":root");
root.style.boxSizing = "border-box";
root.style.fontSize = "62.5%";

//body ---------------------------------------
document.body.style.textAlign = "center";

//main ---------------------------------------
const mainTag = document.querySelector("main");
mainTag.classList.add("mainStyle", "d-flex", "flex-column", "align-items-end");

//h2 Element Tag
const h2Tag = document.querySelector("h2");
h2Tag.classList.add("h2Tag");

//DropUp menu
const dropUpDiv = document.querySelector(".dropup");
dropUpDiv.classList.add(
  "dropUpStyle",
  "justify-content-end",
  "d-flex",
  "flex-column",
  "align-items-end"
);

//Hide button
const hideBtn = document.querySelector("button");
hideBtn.classList.remove("btn", "btn-secondary", "dropdown-toggle");
hideBtn.classList.add("hideBtnStyle", "position-absolute");

//Show button
const showBtn = document.createElement("button");
mainTag.insertBefore(showBtn, dropUpDiv);
showBtn.classList.add("showBtnSytle", "position-relative");
showBtn.innerText = "Show destinations";

// ul Dropdown
const ulDropDown = document.querySelector(".dropdown-menu");
ulDropDown.classList.add("position-relative", "d-block");

const liDropDown = document.querySelectorAll("li");
liDropDown.forEach((eachLi) => {
  eachLi.classList.add("liDropDownStyle");
});

//addEventListener

showBtn.addEventListener("click", function () {
  showBtn.style.display = "none";
  dropUpDiv.style.visibility = "visible";
  ulDropDown.style.visibility = "visible";
});

hideBtn.addEventListener("click", () => {
  dropUpDiv.style.visibility = "hidden";
  showBtn.style.display = "block";
  ulDropDown.style.visibility = "hidden";
});

//Bonus ---------------------------------------------
const selectLi = document.querySelectorAll("li");
const showEvent = document.createElement("div");
showEvent.classList.add("showEventStyle");

selectLi.forEach((eachLi) => {
  eachLi.addEventListener("click", () => {
    showEvent.innerText = `You selected ${eachLi.innerText}`;
    showEvent.style.margin = "5px 0";
    dropUpDiv.append(showEvent);
  });
});
