/* www.youtube.com/CodeExplained */

// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMENT
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const ctx = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
ctx.lineWidth = 8;

// CIRCLE RADIUS
const R = 20;

function drawCircle(color, ratio, anticlockwise) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, R, 0, ratio * 2 * Math.PI, anticlockwise);
  ctx.stroke();
}

function animateChart(start, end, duration) {
  let startTime = null;

  function animationStep(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentRatio = start + progress * (end - start);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle("#1EC677", -currentRatio, true);
    drawCircle("#A52525", 1 - currentRatio, false);

    if (progress < 1) {
      requestAnimationFrame(animationStep);
    }
  }

  requestAnimationFrame(animationStep);
}

function updateChart(income, outcome) {
  let ratio = income / (income + outcome);
  animateChart(0, ratio, 1000); // Here, 1000ms (1 second) is the duration of the animation.
}

// Example usage:
// To update the chart with new income and outcome values, call updateChart function:
// updateChart(300, 100); // This will animate the chart from the current state to the new state (300 income, 100 outcome) over 1 second.
