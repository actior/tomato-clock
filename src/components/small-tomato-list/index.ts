export function setupAddTaskEstimate(element: HTMLDivElement) {
  if (!element) return;
  for (let i = 0; i < 10; i++) {
    const tomatoIcon = document.createElement("div");
    tomatoIcon.className =
      i === 0 ? "tomato-rate-icon-checked" : "tomato-rate-icon";
    element.appendChild(tomatoIcon);
  }
  const tomatoIconList = document.querySelectorAll(".tomato-rate-icon");
  let clickIndex = 0;
  for (let i = 0; i < tomatoIconList.length; i++) {
    const tomatoIcon = tomatoIconList[i];
    tomatoIcon.addEventListener("click", () => {
      clickIndex = i;
      for (let j = 0; j <= clickIndex; j++) {
        if (tomatoIcon.classList.contains("tomato-rate-icon-checked")) {
          for (let k = 0; k < tomatoIconList.length - clickIndex; k++) {
            tomatoIconList[tomatoIconList.length - k]?.classList.remove(
              "tomato-rate-icon-checked"
            );
          }
        } else {
          tomatoIconList[j].classList.add("tomato-rate-icon-checked");
        }
      }
    });
  }
}
