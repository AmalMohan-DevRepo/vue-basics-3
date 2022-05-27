const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        add(num){
            this.number += num 
        }

    },
    computed: {
        displayResult() {
            return (
                this.number < 37 ?  'Not there yet' 
                : this.number === 37 ? this.number 
                : 'Too much! Resetting to 0'
            )
        }
    },
    watch: {
        number(){
            if (this.number > 37){
                setTimeout(() =>{
                    this.number = 0
                },5000)
            }
        }
    }
})

app.mount('#assignment')