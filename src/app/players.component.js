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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var PlayersComponent = (function () {
    function PlayersComponent(router, route, heroService) {
        this.router = router;
        this.route = route;
        this.heroService = heroService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getTeamInfo(params.get('id')); })
            .subscribe(function (t) {
            _this.teamInfo = t;
            console.log(_this.teamInfo);
        });
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getPlayers(params.get('id')); })
            .subscribe(function (t) {
            _this.players = t;
            //   let p:any;
            //  for ( p in this.players){
            //       this.heroService.getPlayerImages(p)
            //  }
            console.log(_this.players);
        });
    };
    return PlayersComponent;
}());
PlayersComponent = __decorate([
    core_1.Component({
        selector: 'players',
        templateUrl: './players.component.html',
        styleUrls: ['./players.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        hero_service_1.HeroService])
], PlayersComponent);
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map