new Vue({
    el: '#app',
    data: {
        counter: 0,
        anotherCounter:0
    },
    methods: {
        evaluate: function(){
            console.log('METHOD EXECUTED')
            return this.counter > 5? 'Maior que 5': 'Menor que 5'
        }
    },
    computed: {
        output: function(){
            console.log('COMPUTE EXECUTED')
            return this.counter > 5? 'Maior que 5': 'Menor que 5'
        }
    }

});