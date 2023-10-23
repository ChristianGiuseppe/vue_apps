function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            yourHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner : null,
            logsBattle: [],
        };
    },
    computed: {
        monsterHealthBar() {
            if(this.monsterHealthBar < 0) {
                return {width: '0%'};
            }
                return {width: this.monsterHealth + '%'};
        },
        yourHealthBar() { 
            if(this.yourHealthBar < 0) {
                return {width: '0%'};
            }
            return {width: this.yourHealth + '%'};
        },
        mayUseSpecialAttack() {
            return (this.currentRound % 3) !== 0;
        }
    },  
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        monsterAttack() {
            this.currentRound++; 
            const damage = getRandomValue(5, 12);
            this.monsterHealth -= damage;
            this.playerAttack(); 
            this.addLogBattle('player', 'attack', damage);
          
        },
        playerAttack(){
            const damage = getRandomValue(8, 15);
            this.yourHealth -= damage;
            this.addLogBattle('monster', 'attack', damage);
        },

        specialAttackMonster() {
            const damage = getRandomValue(10, 25);
            this.monsterHealth -= damage;
            this.playerAttack();
            this.currentRound++;
            this.addLogBattle('player', 'attack', damage);
        },
        healPlayer() {
            const healing = getRandomValue(8, 20);
            this.yourHealth += healing;
            if(this.yourHealth > 100) { 
                this.yourHealth = 100;
            }
            this.playerAttack();
            this.currentRound++;
            this.addLogBattle('player', 'heal', healing);
        },
        startNewGame() {
            this.healPlayer = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;  
            this.winner = null; 
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogBattle(who, what, value) {
            this.logsBattle.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount('#game');