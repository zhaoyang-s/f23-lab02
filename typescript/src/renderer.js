"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRenderer = void 0;
function newRenderer(shape) {
    return {
        draw: function () {
            var area = shape.computeArea();
            console.log("Shape drawn\n" + "Its area is " + area);
        }
    };
}
exports.newRenderer = newRenderer;
