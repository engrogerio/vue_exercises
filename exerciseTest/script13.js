new Vue({
    el: "#app",
    data: {
        counter: 20000,
        color: "background-color:white;"
    },
    methods: {
        increment: function(step){
            this.counter+=step
            this.color="\"background-color:#"+this.counter+";\"";
        },
        decrement: function(step){
            this.counter-=step
            this.color="\"background-color:#"+this.counter+";\"";
        }
    }
});