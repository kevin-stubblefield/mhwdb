Vue.component('skills', {
    template: `
        <div class="skills-list">
            <div v-for="skill in skills[0]">
                <skill :skill="skill" @update="skillChecked"></skill>
            </div>
        </div>
    `,

    props: ['skills'],

    methods: {
        skillChecked: function(value) {
            this.$emit('update', value)
        }
    }
});

Vue.component('skill', {
    template: `
        <div :id="'skill[' + skill.id + ']'" class="skill-card" @click="displayDetails()" :class="{ 'is-open': isOpen }">
            <div class="header">
                <h3>{{ skill.name }} - {{ skill.isOpen }}</h3>
                <p>{{ skill.description }}</p>
            </div>

            <div class="details" :class="{ 'is-open': isOpen }">
                <p v-for="description in skill.descriptions">
                    <input type="radio" :name="'level[' + skill.id + ']'" :value="description.level" v-model="selectedLevel" @click.stop>
                    Level {{ description.level }}: {{ description.description }}
                </p>
            </div>
        </div>
    `,

    data: function() {
        return {
            isOpen: false,
            selectedLevel: 0
        }
    },

    props: ['skill'],

    watch: {
        selectedLevel: function() {
            if (this.selectedLevel > 0) {
                this.skill.isOpen = this.isOpen;
                this.skill.selectedLevel = this.selectedLevel;
                this.$emit('update', this.skill);
            }
        }
    },
    
    methods: {
        displayDetails: function() {
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                this.skill.isOpen = this.isOpen;
                this.selectedLevel = 0;
                this.$emit('update', this.skill);
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        skills: [],
        selectedSkills: {},
        queryString: '?'
    },

    methods: {
        sendSkills: function() {
            console.log('data sent');
            var queryString = '?';
            for (let key in app.selectedSkills) {
                let skill = app.selectedSkills[key];
                console.log(skill);
                if (skill.isOpen) {
                    queryString += 'skill=' + skill.id + '-' + skill.selectedLevel + '&';
                }
            }
            queryString = queryString.slice(0, -1);
            console.log(queryString);

            axios.get('/skills/calculator' + queryString)
            .then(function(response) {
                console.log(response.data);
            });
        },
        
        updateSelectedSkills: function(skill) {
            console.log(skill);
            if (skill.isOpen) {
                app.selectedSkills[skill.id] = skill;
            } else {
                delete app.selectedSkills[skill.id];
            }
            console.log(app.selectedSkills);
        }
    },

    mounted() {
        axios.get('/skills')
        .then(function(response) {
            app.skills.push(response.data);
            for(skill in app.skills) {
                skill.isOpen = false;
            }
        }).catch(function(error) {
            console.error(error);
        });
    }
});