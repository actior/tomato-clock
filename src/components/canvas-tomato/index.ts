// let canvas: HTMLCanvasElement;
// let context: CanvasRenderingContext2D;
// let width = 300 as number;
// let height = 250 as number;
// let progress = 0 as number;
// let seconds = 0 as number;
// let currentSeconds = 0 as number;

// // 初始化
// export function CanvasTomato(canva: string) {
//   canvas = document.querySelector(canva) as HTMLCanvasElement;
//   context = canvas.getContext("2d") as CanvasRenderingContext2D;
// }

// // 设置进度条
// CanvasTomato.prototype.setProgress = (p: number) => {
//   progress = p;
// };

// // 获取进度
// CanvasTomato.prototype.getProgress = () => {
//   return progress;
// };

// // 绘制背景
// CanvasTomato.prototype.drawBackgroundCircle = () => {
//   const x = width / 2;
//   const y = height / 1.6667;
//   // 描述画笔颜色或者样式的属性
//   context.strokeStyle = "#ACACAC";
//   // 描述线段宽度的数字
//   context.lineWidth = 50;
//   // 开始一条路径
//   context.beginPath();
//   // 绘制圆形背景
//   context.arc(x, y, width / 2.4, -(Math.PI / 2), 2 * Math.PI);
//   // 描述路径
//   context.stroke();
// };

// CanvasTomato.prototype.drawCurrentProgressCircle = () => {
//   const x = width / 2;
//   const y = height / 1.6667;
//   // 绘制倒计时环形进度条
//   const canvasGradient = context.createLinearGradient(0, 0, 0, height);
//   // 起点位置
//   canvasGradient.addColorStop(0, "#EA5548");
//   // 终点位置
//   canvasGradient.addColorStop(1, "#EA5548");
//   // 描述画笔颜色或者样式的属性
//   context.strokeStyle = canvasGradient;

//   // 计算进度
//   const progress = 1 - currentSeconds / seconds;
//   CanvasTomato.prototype.setProgress(progress);
//   context.beginPath();
//   // 绘制圆形进度环
//   context.arc(x, y, width / 2.4, -(Math.PI / 2), (-0.5 + 2 * progress) * Math.PI);
//   // 描述路径
//   context.stroke();
// };

// // 填充进度环颜色
// CanvasTomato.prototype.createLinearGradientByTime = () => {
//   // 修改填充颜色
//   const canvasGradient = context.createLinearGradient(
//     width / 2 - 18,
//     height / 2 - 18,
//     width / 2,
//     height / 2 + 50
//   );

//   canvasGradient.addColorStop(0, "#333333");
//   canvasGradient.addColorStop(1, "#333333");
//   return canvasGradient;
// };

// // 绘制倒计时文本
// CanvasTomato.prototype.drawTimeText = () => {
//   context.fillStyle = CanvasTomato.prototype.createLinearGradientByTime();
//   context.textAlign = "center";
//   context.textBaseline = "alphabetic";
//   context.font = "normal normal bold 40px/48px Lato";
//   let s = currentSeconds as number;
//   let ss = parseInt((s % 60).toString()) as number;
//   let mm = parseInt((s / 60).toString()) as number;
//   const text = `${mm.toString().padStart(2, "0")} : ${ss
//     .toString()
//     .padStart(2, "0")}`;
//   context.fillText(text, width / 2, height / 1.5);
// };

// // 清理
// CanvasTomato.prototype.clear = () => {
//   context.clearRect(0, 0, width, height);
// };

// // 设置时间
// CanvasTomato.prototype.setTime = (second: number) => {
//   seconds = second;
// };

// // 同步时间
// CanvasTomato.prototype.setCurrentTime = (currentSecond: number) => {
//   currentSeconds = currentSecond;
// };

// CanvasTomato.prototype.run = (second: number, endCallback: () => void) => {
//   let count = 0;
//   const intervalTime = setInterval(() => {
//     CanvasTomato.prototype.setTime(second);
//     const allTime = seconds;
//     const unPass = allTime - count;
//     count = count + 1;
//     if (unPass < 0) {
//       clearInterval(intervalTime);
//       CanvasTomato.prototype.setTime(30);
//       count = 0;
//       endCallback && endCallback();
//     } else {
//       CanvasTomato.prototype.update(unPass);
//     }
//   }, 1000);
// };

// CanvasTomato.prototype.update = (unPass: number) => {
//   CanvasTomato.prototype.setCurrentTime(unPass);
//   CanvasTomato.prototype.clear();
//   CanvasTomato.prototype.drawBackgroundCircle();
//   CanvasTomato.prototype.drawCurrentProgressCircle();
//   CanvasTomato.prototype.drawTimeText();
// };

export class CanvasTomato {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public width: number;
  public height: number;
  public progress: number;
  public seconds: number;
  public currentSeconds: number;
  static run: any;

  public constructor(name: string) {
    this.canvas = document.querySelector(name) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.width = 300;
    this.height = 250;
    this.progress = 0;
    this.seconds = 0;
    this.currentSeconds = 0;
  }

  public setProgress(progress: number) {
    this.progress = progress;
  }

  public getProgress() {
    return this.progress;
  }

  public drawBackgroundCircle() {
    const x = this.width / 2;
    const y = this.height / 1.6667;
    // 描述画笔颜色或者样式的属性
    this.context.strokeStyle = "#ACACAC";
    // 描述线段宽度的数字
    this.context.lineWidth = 50;
    // 开始一条路径
    this.context.beginPath();
    // 绘制圆形背景
    this.context.arc(x, y, this.width / 2.4, -(Math.PI / 2), 2 * Math.PI);
    // 描述路径
    this.context.stroke();
  }

  public drawCurrentProgressCircle() {
    const x = this.width / 2;
    const y = this.height / 1.6667;
    // 绘制倒计时环形进度条
    const canvasGradient = this.context.createLinearGradient(
      0,
      0,
      0,
      this.height
    );
    // 起点位置
    canvasGradient.addColorStop(0, "#EA5548");
    // 终点位置
    canvasGradient.addColorStop(1, "#EA5548");
    // 描述画笔颜色或者样式的属性
    this.context.strokeStyle = canvasGradient;
    // 计算进度
    const progress = (1 - this.currentSeconds / this.seconds) as number;
    this.setProgress(progress);
    this.context.beginPath();
    // 绘制圆形进度环
    this.context.arc(
      x,
      y,
      this.width / 2.4,
      -(Math.PI / 2),
      (-0.5 + 2 * progress) * Math.PI
    );
    // 描述路径
    this.context.stroke();
  }

  public createLinearGradientByTime() {
    // 修改填充颜色
    const canvasGradient = this.context.createLinearGradient(
      this.width / 2 - 18,
      this.height / 2 - 18,
      this.width / 2,
      this.height / 2 + 50
    );
    canvasGradient.addColorStop(0, "#333333");
    canvasGradient.addColorStop(1, "#333333");
    return canvasGradient;
  }

  public drawTimeText() {
    this.context.fillStyle = this.createLinearGradientByTime();
    this.context.textAlign = "center";
    this.context.textBaseline = "alphabetic";
    this.context.font = "normal normal bold 40px/48px Lato";
    let s = this.currentSeconds as number;
    let ss = parseInt((s % 60).toString()) as number;
    let mm = parseInt((s / 60).toString()) as number;
    const text = `${mm.toString().padStart(2, "0")} : ${ss
      .toString()
      .padStart(2, "0")}`;
    this.context.fillText(text, this.width / 2, this.height / 1.5);
  }

  public clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }

  public setTime(seconds: number) {
    this.seconds = seconds;
  }

  public setCurrentTime(seconds: number) {
    this.currentSeconds = seconds;
  }

  public run(seconds: number, endCallback: () => void) {
    let count = 0;
    const intervalTime = setInterval(() => {
      this.setTime(seconds);
      const allTime = this.seconds;
      const unPass = allTime - count;
      count = count + 1;
      if (unPass < 0) {
        clearInterval(intervalTime);
        this.setTime(30);
        count = 0;
        endCallback && endCallback();
      } else {
        this.update(unPass);
      }
    }, 1000);
  }

  public update(unPass: number) {
      this.setCurrentTime(unPass);
      this.clear();
      this.drawBackgroundCircle();
      this.drawCurrentProgressCircle();
      this.drawTimeText();
  }
}
