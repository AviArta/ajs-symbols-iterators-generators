class Team {
    constructor(team) {
      this.team = team;
    }
  
    [Symbol.iterator] () {
      let index = 0;
      const team = this.team;
      return {
        next() {
          if (index < team.length) {
            return {
              value: team[index++],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    }
  }

const character1 = {
name: 'Лучник1',
type: 'Bowman1',
health: 50,
level: 1,
attack: 40,
defence: 10
}

const character2 = {
name: 'Лучник2',
type: 'Bowman2',
health: 50,
level: 1,
attack: 40,
defence: 10
}
  
const team = new Team([character1, character2]);
for (const character of team) {
console.log(character);
}
