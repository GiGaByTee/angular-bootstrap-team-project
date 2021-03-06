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
var gg = require("./globals");
var mock_heroes_1 = require("./mock-heroes");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.coms = [];
        this.flag = true;
        this.headers = new http_1.Headers({ 'X-Auth-Token': "96704b288d4843f785e4ed7db7f210fe" });
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getCompetitions = function () {
        // let compt: Competition[] = [];
        return this.http.get("http://api.football-data.org/v1/competitions/?season=2017", { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HeroService.prototype.getTeam = function (id) {
        return this.http.get("http://api.football-data.org/v1/competitions/" + id + "/leagueTable", { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HeroService.prototype.getLCTable = function () {
        return this.http.get("http://api.football-data.org/v1/competitions/464/leagueTable", { headers: this.headers })
            .toPromise()
            .then(function (res) {
            console.log(res.json().standings);
            return res.json().standings;
        });
    };
    HeroService.prototype.getTeamInfo = function (id) {
        return this.http.get("http://api.football-data.org/v1/teams/" + id, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HeroService.prototype.getPlayers = function (id) {
        var _this = this;
        return this.http.get("http://api.football-data.org/v1/teams/" + id + "/players", { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var players = res.json();
            for (var i = 0; i < players.players.length; i++) {
                _this.setNationalityImg(players.players[i]);
            }
            return players;
        });
    };
    HeroService.prototype.setNationalityImg = function (player) {
        var p = gg.listOfTeam[player.nationality];
        console.log(player.nationality);
        player.nationalityUrl = p.toLowerCase();
        console.log(player);
        return player;
    };
    HeroService.prototype.search = function (term) {
        console.log("here");
        if (this.flag) {
            console.log("only oneeee");
            this.flag = false;
            this.teamsInfo = this.getTeam("445");
            //console.log(this.getTeam("445") )
        }
        return Observable_1.Observable.fromPromise(this.teamsInfo.then(function (teams) { return teams.standing.filter(function (team) { return team.teamName.toLowerCase().includes(term); }); }));
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map