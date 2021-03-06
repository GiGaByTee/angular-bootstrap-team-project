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
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var AppComponent = (function () {
    function AppComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.isVisible = false;
        this.searchValue = null;
        this.searchTerms = new Subject_1.Subject();
    }
    AppComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        this.isVisible = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getCompetitions()
            .then(function (c) { return _this.com = c.filter(function (a) { return !(a.caption.indexOf("Two") !== -1 || a.caption.indexOf("2 ") !== -1); }).slice(1, 7); });
        this.teamsInfo = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    AppComponent.prototype.goToDetail = function (competition) {
        this.router.navigate(['/detail', competition.id]);
    };
    AppComponent.prototype.gotoTeam = function (teamId) {
        this.isVisible = false;
        this.searchValue = '';
        this.router.navigate(['/playerDetails', teamId.split('/')[5]]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                       \n        </button>\n        <span class=\"navbar-brand\">Crazy Fans</span>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a routerLink=\"/dashboard\" href=\"/dashboard\">Home</a></li>\n          <li class=\"trigger\"><a>Leagues</a>\n          <div class=\"sub\">\n             <div class=\"item\" style=\"cursor:pointer\"  *ngFor=\"let c of com\" (click)=\"goToDetail(c)\">{{c.caption}}</div>\n             <div class=\"item show-more\"  routerLink=\"/heroes\" style=\"cursor:pointer\" >Show all</div>   \n          </div>\n          </li>\n          <li><a href=\"teams.html\">Teams</a></li>\n          <li><a routerLink=\"/lctable\" href=\"players.html\">LC</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav\">\n          <form>\n          <input type=\"text\" name=\"search\" placeholder=\"Search..\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" [(ngModel)]=\"searchValue\">\n        </form>\n          <div *ngIf=\"isVisible\">\n            <div *ngFor=\"let team of teamsInfo | async\"\n                (click)=\"gotoTeam(team._links.team.href)\" class=\"search-result\" >\n              {{team.teamName}}\n            </div>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n\n  <footer>\n  <div class=\"container\">\n\n    <ul class=\"menu col-sm-4 text-left\">\n      <li><a href=\"#\">About Crazy Fans</a></li>\n      <li><a href=\"#\">Advertise</a></li>\n      <li><a href=\"#\">Site map</a></li>\n    </ul>\n\n    <ul class=\"menu col-sm-4 text-left\">\n      <li><a href=\"#\">Terms &amp; Conditions</a></li>\n      <li><a href=\"#\">Privacy Policy</a></li>\n    </ul>\n\n    <ul class=\"menu col-sm-4 text-left\">\n      <li><a href=\"#\">Cookie Policy</a></li>\n      <li><a href=\"#\">Editorial Complaint?</a></li>\n    </ul>\n  </div>\n      \n  <div class=\"container-fluid text-right\">\n    <p style=\"margin-top: 2em;\">\u00A92017 CrazyFansDremTeam</p>\n  </div>\n</footer>\n\n  ",
        styleUrls: ['./app.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map