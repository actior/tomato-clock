const centerIconList = [
  {
    title: "ADD NEW TASK",
    icon: "/src/static/icons/add_white.svg",
    iconEd: "/src/static/icons/add_red.svg",
  },
  {
    title: "TASK LISTS",
    icon: "/src/static/icons/list_white.svg",
    iconEd: "/src/static/icons/list_red.svg",
  },
  {
    title: "ANALYTICS REPORT",
    icon: "/src/static/icons/analysis_white.svg",
    iconEd: "/src/static/icons/analysis_red.svg",
  },
  {
    title: "RING TONE",
    icon: "/src/static/icons/ringtone_white.svg",
    iconEd: "/src/static/icons/ringtone_red.svg",
  },
];

export function setupOperationBarIcon(element: HTMLDivElement) {
  if (!element) return;
  for (let i = 0; i < centerIconList.length; i++) {
    const icon = document.createElement("div");
    icon.className = "operation-bar-icon";
    icon.innerHTML = `<img src="${
      i === 0 ? centerIconList[i].iconEd : centerIconList[i].icon
    }" class="white icon finger" />`;
    element.appendChild(icon);
  }
  const iconList = document.querySelectorAll(".operation-bar-icon");
  for (let i = 0; i < iconList.length; i++) {
    const icon = iconList[i];
    icon.addEventListener("click", () => {
      for (let j = 0; j < iconList.length; j++) {
        iconList[j].innerHTML = `<img src="${
          j === i ? centerIconList[j].iconEd : centerIconList[j].icon
        }" class="white icon finger" />`;
        const operationBarTitle = document.querySelector(
          ".operation-bar-content-title"
        ) as HTMLDivElement;
        if (operationBarTitle) {
          operationBarTitle.innerHTML = centerIconList[i].title;
        }
      }
    });
  }
}
