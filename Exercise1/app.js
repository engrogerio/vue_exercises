new Vue({
	el: "#exercise",
	data: {
		name: 'Rogério Vieira da Silva',
		age: 47,
		image: 'https://www.industriahoje.com.br/wp-content/uploads/2013/09/O-QUE-E-FMEA.png'
	},
	methods: {
		get_rand: function(){
			return Math.random(100);
		}
	}
});
