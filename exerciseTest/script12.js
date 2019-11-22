new Vue({
el: "#app",
data: {
    x: 0,
    y: 0,
    image:'https://www.industriahoje.com.br/wp-content/uploads/2013/09/O-QUE-E-FMEA.png'
},
methods: {
    updateCoords: function(event){
        this.x = event.clientX;
        this.y = event.clientY;
    },
    dummy: function(event){
        event.stopPropagation();
    },
    alertme: function(event){
        alert('Hey, you pressed enter or space')
    }
}

});