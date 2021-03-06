"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (arr, prop, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (arr === undefined)
            return;
        var m = reverse ? -1 : 1;
        return arr.sort(function (a, b) {
            if (a.points > b.points) {
                return -1;
            }
            if (a.points < b.points) {
                return 1;
            }
            return 0;
        });
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    core_1.Pipe({
        name: 'sortBy'
    })
], SortByPipe);
exports.SortByPipe = SortByPipe;
//# sourceMappingURL=sortByPipe.js.map