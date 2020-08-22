const calculateAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let winner

const teamJohn = calculateAvg(89, 120, 103);
const teamMike = calculateAvg(116, 94, 123);
const teamMary = calculateAvg(97, 134, 105);

const teams = [teamJohn, teamMike, teamMary];

console.log(`John team = ${teamJohn}, Mike team = ${teamMike} Mary team = ${teamMary}`)

winner = Math.max(teamJohn, teamMike, teamMary);

switch(winner) {
    case teamJohn:
        console.log(`John Wins! Johns Team Average is ${teamJohn} & Mikes Team Average is ${teamMike} also Marys Average is ${teamMary}`);
        break
    case teamMike:
        console.log(`Mike Wins! Johns Team Average is ${teamJohn} & Mikes Team Average is ${teamMike} also Marys Average is ${teamMary}`);
        break
    case teamMary:
        console.log(`Mary wins! Johns Team Average is ${teamJohn} & Mikes Team Average is ${teamMike} also Marys Average is ${teamMary}`)
        break
    default:
        console.log(`Draw! Johns Team Average is ${teamJohn} & Mikes Team Average is ${teamMike} also Marys Average is ${teamMary}`)
}
