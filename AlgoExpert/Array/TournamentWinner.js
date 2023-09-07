const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for(let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if(! (team in scores)) scores[team] = 0;
  scores[team] += points;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;


/* Cleaner solution */

function tournamentWinner(competitions, results) {
  // Write your code here.
  const leader = {score: -Infinity, name: ''};
  const scoreBoard = {};

  for(let i = 0; i < competitions.length; i++) {
    const winnerIdx = results[i] === 0 ? 1 : 0;
    const winner = competitions[i][winnerIdx];

    if (winner in scoreBoard) {
      scoreBoard[winner] += 3;
    } else {
      scoreBoard[winner] = 3;
    }

    if( leader.score < scoreBoard[winner]) {
      leader.name = winner;
      leader.score = scoreBoard[winner];
    }
  }
  return leader.name;
  }
    


// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

