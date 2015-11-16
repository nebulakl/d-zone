'use strict';
var SpriteSheet = require('./../engine/spritesheet.js');

var map = {
    actor: {
        online: {
            north: { x: 28, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            south: { x: 0, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            east: { x: 14, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            west: { x: 28, y: 0, w: 14, h: 14, ox: 0, oy: 5 }
        },
        idle: {
            north: { x: 56, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            south: { x: 42, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            east: { x: 56, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            west: { x: 42, y: 0, w: 14, h: 14, ox: 0, oy: 5 }
        },
        offline: {
            north: { x: 84, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            south: { x: 70, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            east: { x: 84, y: 0, w: 14, h: 14, ox: 0, oy: 5 },
            west: { x: 70, y: 0, w: 14, h: 14, ox: 0, oy: 5 }
        }
    }
};
var image = new SpriteSheet('actors.png');
image.once('loaded',function(canvas) {
    image.img = canvas;
});

module.exports = Sheet;

function Sheet(spriteName) {
    this.map = JSON.parse(JSON.stringify(map[spriteName]));
}

Sheet.prototype.getSprite = function() {
    if(!image.img) return;
    return image.img;
};

Sheet.prototype.onLoad = function(cb) {
    image.once('loaded',cb);
};