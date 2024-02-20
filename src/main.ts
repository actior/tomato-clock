import "./style.css";
import { setupAddTaskEstimate } from "./components/small-tomato-list/index";
import { setupOperationBarIcon } from "./components/operation-bar-icon/index";
import { CanvasTomato } from "./components/canvas-tomato/index";
import { setupTaskOperation } from "./components/task-operation/index";

const circleClock = new (CanvasTomato as any)('canvas');
circleClock.update(1500);
// circleClock.run(1500, () => {
//   console.log("倒计时执行完毕");
// });

setupTaskOperation(document.querySelector(".tomato-clock-task-operation") as HTMLDivElement);
setupAddTaskEstimate(document.querySelector(".tomato-rate-list") as HTMLDivElement);
setupOperationBarIcon(document.querySelector(".operation-bar") as HTMLDivElement);