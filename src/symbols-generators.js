class Team {
    constructor(team) {
      this.team = team;
    }
  
    *[Symbol.iterator] () {
        const team = this.team;
        for (let index = 0; index < team.length; index += 1) {
            yield team[index];
        }
    }
}

const character3 = {
    name: 'Лучник3',
    type: 'Bowman3',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
    }
    
const character4 = {
    name: 'Лучник4',
    type: 'Bowman4',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
    }

const team = new Team([character3, character4]);
for (const character of team) {
    console.log(character);
}
