'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = 150;
var barPositionX = CLOUD_X + (CLOUD_WIDTH - (COLUMN_WIDTH + COLUMN_GAP) * 4 + COLUMN_GAP) / 2;
var barPositionY = CLOUD_Y + GAP + (FONT_GAP + GAP) * 2 + GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function (player) {
  return (player === 'Вы') ? 'rgb(255, 0, 0)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.1) + ')';
};

var drawColumn = function (ctx, height, color, player, multiplier) {
  ctx.fillStyle = color;
  ctx.fillRect(barPositionX + (COLUMN_WIDTH + COLUMN_GAP) * multiplier, barPositionY + BAR_HEIGHT - height, COLUMN_WIDTH, height);
  ctx.fillText(player, barPositionX + (COLUMN_WIDTH + COLUMN_GAP) * multiplier + COLUMN_WIDTH / 2, CLOUD_HEIGHT - GAP);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#00a';
  ctx.textAlign = 'center';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_WIDTH / 2 + CLOUD_X, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2 + CLOUD_X, CLOUD_Y + (GAP + FONT_GAP) * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var columnHeight = BAR_HEIGHT * times[i] / maxTime;
    var columnColor = getColor(players[i]);
    drawColumn(ctx, columnHeight, columnColor, players[i], i);
  }
};
