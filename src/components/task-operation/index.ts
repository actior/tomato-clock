import { CanvasTomato } from "../canvas-tomato/index";

const taskIconList = [
  {
    className: "tomato-clock-task-operation-cirle clock-start",
    title: "START",
    icon: "/src/static/icons/play_gray.svg",
  },
  {
    className: "tomato-clock-task-operation-cirle clock-pause",
    title: "PAUSE",
    icon: "/src/static/icons/pause_gray.svg",
  },
  {
    className: "tomato-clock-task-operation-cirle clock-reset",
    title: "RESET",
    icon: "/src/static/icons/reset_gray.svg",
  },
];
export function setupTaskOperation(element: HTMLDivElement) {
  if (!element) return;
  for (let i = 0; i < taskIconList.length; i++) {
    const task = document.createElement("div");
    task.className = taskIconList[i].className;
    task.innerHTML = `<img src="${taskIconList[i].icon}" class="tomato-clock-task-operation-cirle-icon" />
        <div class="tomato-clock-task-operation-cirle-text">${taskIconList[i].title}</div>`;
    element.appendChild(task);
  }
  // 点击开始
  const clockStartBtn = document.querySelector(
    ".clock-start"
  ) as HTMLDivElement;
  console.log("clockStartBtn: ", clockStartBtn);
  clockStartBtn.addEventListener("click", () => {
    CanvasTomato.prototype.run(10, () => {
      // circleClock.update(180);
      console.log("倒计时执行完毕");
    });
  });
}
