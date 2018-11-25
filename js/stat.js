var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var FONT_GAP = 15;
var TIME_GAP = 20;
var TEXT_WIDTH = 80;
var COLUMN_WIDTH = 70;
var barHeight = CLOUD_HEIGHT - (GAP + FONT_GAP + GAP) * 2 - GAP;
// var barWidth = CLOUD_WIDTH - (COLUMN_WIDTH + GAP) * 2;
var barPositionX = CLOUD_X + COLUMN_WIDTH + GAP;
var barPositionY = CLOUD_Y + GAP + FONT_GAP + GAP + GAP / 2;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#00a';
  ctx.textAlign = 'center';
  ctx.fillText('Поздравляем! Вы сожгли забор!', CLOUD_WIDTH / 2 + CLOUD_X, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var columnHeight = barHeight * times[i] / maxTime;
    ctx.fillRect(barPositionX + (COLUMN_WIDTH + TIME_GAP) * i, barPositionY + barHeight - columnHeight, COLUMN_WIDTH, columnHeight);
    ctx.fillText(players[i], barPositionX + (COLUMN_WIDTH + TIME_GAP) * i + COLUMN_WIDTH / 2, CLOUD_HEIGHT - GAP - FONT_GAP);
  }
};
