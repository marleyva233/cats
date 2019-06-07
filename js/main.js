var adoptCats = [
	{
		name:"Tuxedo",
		breed: "Tabby",
		img: "img/tuxedo.jpeg",
		age: 1,
		notes: [
			{
			name: "Anna", 
			notes: "A very good cat. Loves to play with toys. Very affectionate."
			}
		]
	},
	{
		name: "Oreo",
		breed: "Tabby",
		img: "img/oreo.jpeg",
		age: 1,
		notes: [
			{
				name: "Bob",
				notes: "Oreo is a very chill cat. Loves to nap. Easily irrated."
			}
		]
	},
	{
		name: "Artemis",
		breed: "Tabby",
		img: "img/artemis.jpeg",
		age: 8,
		notes: [
			{
				name: "Anna",
				notes: "Very friendly cat. Loves to be petted. Nice pur."
			},
			{
				name: "Sophie",
				notes: "Loves treats and catnip"
			},
			{
				name: "Bob",
				notes: "Perfect lap cat."
			}
		]
	},
	{
		name: "Anabelle",
		breed: "Tabby",
		img: "img/anabelle.jpeg",
		age: 3,
		notes: [
			{
				name: "Bob",
				notes: "Anabelle is a very energetic cat. Loves to play."
			}
		]
	},
	{
		name: "Piper",
		breed: "Tabby",
		img: "img/piper.jpeg",
		age: 11,
		notes: [
			{
				name: "Sophie",
				notes: "Piper is an older cat. Loves to nap all day. Very gentle cat."
			}
		]
	}
];

Vue.component('app-cats', {
	props: ['name', 'breed', 'age', 'img', 'notes'],
	template:`
		<div class="col-4 text-center">
			<h3>{{ name }}</h3>
			<img :src="img" :alt="name" class="w-100">
			<ul>
				<li>Breed: {{ breed }} </li>
				<li>Age: {{ age }}
			</ul>
			<div class="alert alert-primary" role="alert">
			Notes from our staff: <br>
			{{ notes[0].name }} : {{ notes[0].notes }}
			</div>
		</div>
	`
});

new Vue ({
	el: '#app',
	data: {
		cats: adoptCats
	}
});