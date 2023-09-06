"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRectangle = void 0;
function newRectangle(width, height) {
    return {
        computeArea: function () {
            return width * height;
        }
    };
}
exports.newRectangle = newRectangle;
