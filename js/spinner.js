
document.getElementById("pay-button").onclick = function () {
  alert("This is where Razorpay payment would be initiated (once your API is ready).");
};

// Basic spinner logic (can be improved)
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const segments = 6;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#1ABC9C"];
const anglePerSegment = (2 * Math.PI) / segments;

function drawWheel() {
  for (let i = 0; i < segments; i++) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.fillStyle = colors[i];
    ctx.arc(200, 200, 200, i * anglePerSegment, (i + 1) * anglePerSegment);
    ctx.lineTo(200, 200);
    ctx.fill();

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(i * anglePerSegment + anglePerSegment / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText(String(i + 1), 180, 10);
    ctx.restore();
  }
}

drawWheel();
