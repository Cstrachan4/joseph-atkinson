import { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

import useDarkMode from "@fisch0920/use-dark-mode";

export default function Clock() {
  const darkMode = useDarkMode();
  const canvasRef = useRef(null);
  const canvasSize = 128;
  const center = canvasSize / 2;
  const circleSize = canvasSize - 6;
  const lineWidth = 4;

  const x2 = (n, i, x1, r) => {
    return x1 + r * Math.sin((2 * Math.PI * n) / i);
  };

  const y2 = (n, i, y1, r) => {
    return y1 - r * Math.cos((2 * Math.PI * n) / i);
  };

  const getTime = () => {
    var date = new Date();
    return {
      hours: date.getHours(),
      minutes:
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      seconds:
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
    };
  };

  const drawCircle = (ctx, x, y, r) => {
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = darkMode.value ? "#ffffff" : "#000000";
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  };

  const drawLine = (ctx, xStart, yStart, xStop, yStop, width) => {
    ctx.beginPath();
    ctx.strokeStyle = darkMode.value ? "#ffffff" : "#000000";
    ctx.lineWidth = width;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStop, yStop);
    ctx.stroke();
    ctx.closePath();
  };

  const drawClock = (ctx) => {
    const time = getTime();
    const favicon = document.getElementById("favicon");

    const lineRad = 40;

    ctx.clearRect(0, 0, canvasSize, canvasSize); // reset canvas

    drawCircle(ctx, center, center, circleSize / 2);

    drawLine(
      ctx,
      center,
      center,
      x2(time.hours, 12, center, lineRad),
      y2(time.hours, 12, center, lineRad),
      lineWidth
    ); // hour
    drawLine(
      ctx,
      center,
      center,
      x2(time.minutes, 60, center, lineRad),
      y2(time.minutes, 60, center, lineRad),
      lineWidth
    ); // minutes
    // drawLine(ctx, center, center, x2(time.seconds, 60, center, lineRad), y2(time.seconds, 60, center, lineRad), lineWidth); // seconds

    favicon.href = canvasRef.current.toDataURL("image/png");
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    let timeOut = setInterval(() => {
      drawClock(ctx);
    }, 1000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);

  return (
    <canvas
      hidden
      ref={canvasRef}
      width={canvasSize}
      height={canvasSize}
    ></canvas>
  );
}
