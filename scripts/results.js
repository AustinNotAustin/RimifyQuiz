const barGraph = new Chart(document.getElementById("chartjs-1"), {
	type: "bar",
	data: {
		labels: [
			"Animals",
			"Artistic",
			"Construction",
			"Cooking",
			"Crafting",
			"Intellectual",
			"Medical",
			"Melee",
			"Mining",
			"Plants",
			"Shooting",
			"Social",
		],
		datasets: [
			{
				label: "1 Skill Point",
				data: [
					0, // Animals
					0, // Artistic
					0, // Construction
					0, // Cooking
					0, // Crafting
					0, // Intellectual
					0, // Medical
					0, // Melee
					0, // Mining
					0, // Plants
					0, // Shooting
					0, // Social
				],
				fill: true,
				backgroundColor: [
					"rgba(153, 77, 0, 0.2)",
					"rgba(255, 102, 128, 0.2)",
					"rgba(255, 140, 25, 0.2)",
					"rgb(75, 192, 192, 0.2)",
					"rgb(54, 162, 235, 0.2)",
					"rgb(255, 102, 102, 0.2)",
					"rgb(255, 2, 25, 0.2)",
					"rgb(255, 99, 132, 0.2)",
					"rgb(54, 162, 235, 0.2)",
					"rgb(255, 205, 86, 0.2)",
					"rgb(255, 2, 25, 0.2)",
					"rgb(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgba(153, 77, 0)",
					"rgba(255, 102, 128)",
					"rgba(255, 140, 25)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(255, 102, 102)",
					"rgb(255, 2, 25)",
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
					"rgb(255, 2, 25)",
					"rgb(75, 192, 192)",
				],
				borderWidth: 2,
			},
		],
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			yAxes: [
				{
					display: true,
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
});

const donut = new Chart(document.getElementById("chartjs-4"), {
	type: "doughnut",
	data: {
		labels: [
			"Animals",
			"Artistic",
			"Construction",
			"Cooking",
			"Crafting",
			"Intellectual",
			"Medical",
			"Melee",
			"Mining",
			"Plants",
			"Shooting",
			"Social",
		],
		datasets: [
			{
				label: "Issues",
				data: [
                    0,      // Animals
                    0,      // Artistic
                    0,      // Construction
                    0,      // Cooking
                    0,      // Crafting
                    0,      // Intellectual
                    0,      // Medical
                    0,      // Melee
                    0,      // Mining
                    0,      // Plants
                    0,      // Shooting
                    0       // Social
                ],
				backgroundColor: [
					"rgba(153, 77, 0)",
					"rgba(255, 102, 128)",
					"rgba(255, 140, 25)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(255, 102, 102)",
					"rgb(255, 2, 25)",
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
					"rgb(255, 2, 25)",
					"rgb(75, 192, 192)",
				],
			},
		],
	},
});
