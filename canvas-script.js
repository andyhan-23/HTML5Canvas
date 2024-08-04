window.onload = function () {
  const canvas = document.getElementById("line-canvas");
  const context = canvas.getContext("2d");

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(30, 70);
  context.lineTo(130, 70);
  context.stroke();
};
