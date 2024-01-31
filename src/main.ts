import "./style.css";
import { setupAddTaskEstimate } from "./components/small-tomato-list/index";
import { setupOperationBarIcon } from "./components/operation-bar-icon/index";

setupAddTaskEstimate(document.querySelector(".tomato-rate-list") as HTMLDivElement);
setupOperationBarIcon(document.querySelector(".operation-bar") as HTMLDivElement);
