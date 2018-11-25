var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var FONT_GAP = 15;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#00a';
  ctx.textAlign = 'center';
  ctx.fillText('Поздравляем! Вы сожгли забор!', CLOUD_WIDTH / 2 + CLOUD_X, CLOUD_Y + GAP + FONT_GAP);
};