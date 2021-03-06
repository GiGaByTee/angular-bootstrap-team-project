"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        // value.sort((t1:LCTable, t2:LCTable) =>{
        //   if (t1.points > t2.points) {
        //     return 1;
        // }
        if (args === void 0) { args = null; }
        // if (t1.points < t2.points) {
        //     return -1;
        // }
        // return 0;
        // })
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    return ValuesPipe;
}());
ValuesPipe = __decorate([
    core_1.Pipe({
        name: 'values',
        pure: false
    })
], ValuesPipe);
exports.ValuesPipe = ValuesPipe;
//# sourceMappingURL=myPipe.js.map