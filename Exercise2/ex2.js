new Vue({
    el: "#exercise",
    data: {
        key: "",
        name: "Rogério",
        is_number: "Not a number"
    },
    methods: {
        showAlert: function(){
            alert("THis Is an Alert!!");
        },
        keypressed: function(event){
            this.key=event.key
        },
        check:function(){
        if (isNaN(this.key)) {this.is_number="Not a Number"
        }else{
            this.is_number="This is a NUMBER !!!"}
        }

    }
});