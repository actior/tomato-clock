import "./style.css";
import { setupAddTaskEstimate } from "./components/small-tomato-list/index";
import { setupOperationBarIcon } from "./components/operation-bar-icon/index";
import { CanvasTomato } from "./components/canvas-tomato/index";

const circleClock = new (CanvasTomato as any)('canvas');
circleClock.run(10, () => {
  console.log("倒计时执行完毕");
});

setupAddTaskEstimate(document.querySelector(".tomato-rate-list") as HTMLDivElement);
setupOperationBarIcon(document.querySelector(".operation-bar") as HTMLDivElement);

