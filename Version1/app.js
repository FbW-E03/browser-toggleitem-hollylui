//body --------------------------------
document.body.style.width = "500px";
document.body.style.margin = "auto";

//main ---------------------------------
const mainTag = document.querySelector("main");
mainTag.classList.add("d-flex", "flex-column", "align-items-end");

//header  --------------------------------
const headerTag = document.querySelector("header");
headerTag.classList.add(
  "d-flex",
  "justify-content-center",
  "align-items-center"
);

//p-title --------------------------------
// Toggle the list of my favourite destinations
const pTag = document.querySelector("p");
pTag.classList.add("p-title", "bg-info", "d-flex", "align-items-center");

//destionations list  --------------------------------
const destTable = document.createElement("table");
// tbDest.style.display = "none";
destTable.classList.add("bg-secondary", "bg-opacity-50");
destTable.classList.add("tableStyle");

mainTag.append(destTable);

const destLocation = (...locations) => {
  for (let eachLocation of locations) {
    const destTr = document.createElement("tr");
    const destTd = document.createElement("td");
    destTd.innerText = eachLocation;
    destTable.append(destTr);
    destTr.append(destTd);
  }
};

destLocation("Hong Kong", "Korean", "India");

const getTd = document.querySelectorAll("td");
getTd.forEach((each) => {
  each.style.textIndent = "10px";
  each.style.padding = "10px 0";
  each.style.borderBottom = "1px solid white";
  each.style.width = "500px";
});

//show destionation button  --------------------------------
let btnText = "Show destionation";

const showBtn = document.createElement("button");
mainTag.append(showBtn);
showBtn.innerText = btnText;
showBtn.classList.add("btnStyle");

//addEventListener
showBtn.addEventListener("click", () => {
  if (showBtn.innerText === btnText) {
    destTable.style.display = "block";
    showBtn.innerText = "Hide destionation";
  } else {
    destTable.style.display = "none";
    showBtn.innerText = btnText;
  }
});
