new Vue({
	el: '#app',
	data: {
		id: 20039,
		name: 'Rogério Silva',
		hobbies: ['tennis', 'python', 'music'],
		website: 'https://www.inventsis.com.br',
		html: '<a href="http://g1.globo.com">g1</a>',
		x: 0,
		y: 0
	},
	methods: {
		get_hobbies: function(){
			this.id = 0;
			return this.hobbies;
		},
		add_hobby: function(hobby){
			this.hobbies.push(hobby);
		},
		updateCoord: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
});
