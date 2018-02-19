Vue.component('skills', {
    template: `
        <div class="skills-list">
            <div v-for="skill in skills[0]">
                <skill :skill="skill"></skill>
            </div>
        </div>
    `,

    props: ['skills']
});

Vue.component('skill', {
    template: `
        <div class="skill-card" @click="displayDetails()" :class="{ 'is-open': isOpen }">
            <div class="header">
                <h3>{{ skill.name }}</h3>
                <p>{{ skill.description }}</p>
            </div>

            <div class="details" :class="{ 'is-open': isOpen }">
                <p v-for="description in skill.descriptions">
                    <input type="radio" :name="'level[' + skill.id + ']'" :value="description.level" @click.stop="return false;">
                    Level {{ description.level }}: {{ description.description }}
                </p>
            </div>
        </div>
    `,

    data: function() {
        return {
            isOpen: false
        }
    },

    props: ['skill'],
    
    methods: {
        displayDetails: function() {
            this.isOpen = !this.isOpen;
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        skills: []
    },

    mounted() {
        axios.get('/skills')
        .then(function(response) {
            app.skills.push(response.data);
            app.skills.forEach(function(skill) {
                skill.isOpen = false;
            });
        }).catch(function(error) {
            console.error(error);
        });
    }
});