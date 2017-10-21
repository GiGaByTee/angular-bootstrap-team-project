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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_service_1 = require("./hero.service");
var modal_service_1 = require("./modal/modal.service");
var LeagueDetailComponent = (function () {
    function LeagueDetailComponent(heroService, route, location, router, modalService) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.modalService = modalService;
        this.modalId = 'hoplaModal';
        this.showDialog = false;
    }
    LeagueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getTeam(params.get('id')); })
            .subscribe(function (t) {
            _this.teams = t;
            console.log(_this.teams);
        });
    };
    LeagueDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    LeagueDetailComponent.prototype.getTeamDetails = function (teamId) {
        this.router.navigate(['/playerDetails', teamId.split('/')[5]]);
    };
    return LeagueDetailComponent;
}());
LeagueDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './league-detail.component.html',
        styleUrls: ['./league-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router,
        modal_service_1.ModalService])
], LeagueDetailComponent);
exports.LeagueDetailComponent = LeagueDetailComponent;
//# sourceMappingURL=league-detail.component.js.map