"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = (function () {
    function Team(position, teamName, crestURI, playedGames, points, goals, goalsAgainst, goalDifference, wins, draws, losses, home, away) {
        this.position = position;
        this.teamName = teamName;
        this.crestURI = crestURI;
        this.playedGames = playedGames;
        this.points = points;
        this.goals = goals;
        this.goalsAgainst = goalsAgainst;
        this.goalDifference = goalDifference;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.home = home;
        this.away = away;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map