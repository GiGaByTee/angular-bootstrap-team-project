"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_service_1 = require("./modal.service");
var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        console.log(this);
        this.modalService.registerModal(this);
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        this.modalService.close(this.modalId, checkBlocking);
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "blocking", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        styleUrls: ['./modal.scss'],
        template: "\n      <div [ngClass]=\"{'closed': !isOpen}\">\n        <div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\n        <div class=\"modal\">\n          <div class=\"title\" *ngIf=\"modalTitle\">\n            <span class=\"title-text\">{{ modalTitle }}</span>\n            <span class=\"right-align\" (click)=\"close(true)\"><i class=\"material-icons md-24\">clear</i></span>\n          </div>\n\n          <div class=\"body\">\n            \n          </div>\n        </div>\n      </div>\n    "
    }),
    __metadata("design:paramtypes", [modal_service_1.ModalService])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map