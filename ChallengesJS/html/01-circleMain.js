const circle = document.querySelector(".circle");
document
  .querySelector(".circle")
  .addEventListener(
    "mouseenter",
    () => ((circle.style.height = "32px"), (circle.style.width = "32px"))
  );
document
  .querySelector(".circle")
  .addEventListener(
    "mouseleave",
    () => (
      (circle.style.backgroundColor = "#999"),
      (circle.style.height = "16px"),
      (circle.style.width = "16px")
    )
  );
