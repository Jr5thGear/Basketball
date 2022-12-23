// Get the canvas element
var canvas = document.getElementById('game-canvas');

// Get the 2D context of the canvas
var ctx = canvas.getContext('2d');

// Set the ball properties
var ballRadius = 20;
var ballColor = '#0000FF';
var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballVelocityX = 5;
var ballVelocityY = 5;

// Set the hoop properties
var hoopX = canvas.width / 2;
var hoopY = 50;
var hoopRadius = 50;
var hoopColor = '#00FF00';

// Set the player properties
var playerX = canvas.width / 2;
var playerY = canvas.height - 100;
var playerWidth = 100;
var playerHeight = 20;
var playerColor = '#FF0000';

// Set the game loop flag
var running = true;

// The main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();

  // Draw the hoop
  ctx.beginPath();
  ctx.arc(hoopX, hoopY, hoopRadius, 0, Math.PI*2);
  ctx.fillStyle = hoopColor;
  ctx.fill();
  ctx.closePath();

  // Draw the player
  ctx.beginPath();
  ctx.rect(playerX - playerWidth / 2, playerY, playerWidth, playerHeight);
  ctx.fillStyle = playerColor;
  ctx.fill();
  ctx.closePath();

  // Update the ball position
  ballX += ballVelocityX;
  ballY += ballVelocityY;

  // Check for ball collision with the window edges
  if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
    ballVelocityX *= -1;
  }
  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballVelocityY *= -1;
  }

  // Check for ball collision with the hoop
  if (distance(ballX, ballY, hoopX, hoopY) < ballRadius + hoopRadius) {
    ballVelocityY *= -1;
  }

  //
