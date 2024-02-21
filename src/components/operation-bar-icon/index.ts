import TASK from '../../../static/icons/add_white.svg'
import TASKED from '../../../static/icons/add_red.svg'
import LIST from '../../../static/icons/list_white.svg'
import LISTED from '../../../static/icons/list_red.svg'
import ANALYSIS from '../../../static/icons/analysis_white.svg'
import ANALYSISED from '../../../static/icons/analysis_red.svg'
import RING from '../../../static/icons/ringtone_white.svg'
import RINGED from '../../../static/icons/ringtone_red.svg'

const centerIconList = [
  {
    title: "ADD NEW TASK",
    icon: TASK,
    iconEd: TASKED,
  },
  {
    title: "TASK LISTS",
    icon: LIST,
    iconEd: LISTED,
  },
  {
    title: "ANALYTICS REPORT",
    icon: ANALYSIS,
    iconEd: ANALYSISED,
  },
  {
    title: "RING TONE",
    icon: RING,
    iconEd: RINGED,
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
  const operationBarContentBody = document.querySelectorAll(
    ".operation-bar-content-body"
  ) as unknown as HTMLDivElement[];
  const operationBarTitle = document.querySelector(
    ".operation-bar-content-title"
  ) as HTMLDivElement;
  for (let i = 0; i <= iconList.length; ++i) {
    const icon = iconList[i];
    icon.addEventListener("click", () => {
      for (let j = 0; j <= iconList.length; ++j) {
        iconList[j].innerHTML = `<img src="${
          j === i ? centerIconList[j].iconEd : centerIconList[j].icon
        }" class="white icon finger" />`;
        if (operationBarTitle) {
          operationBarTitle.innerHTML = centerIconList[i].title;
        }
        if (operationBarContentBody) {
          operationBarContentBody[j].style.display = j === i ? "block" : "none";
        }
      }
    });
  }
}
