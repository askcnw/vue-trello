<template>
	<div class="card">
		<p>{{ body }}</p>
		<button @click="removeCard" class="card__button">✗</button>
	</div>
</template>

<script>
	export default {
		props: {
			body: {
				type: String,
				require: true,
			},
			cardIndex: {
				type: Number,
				require: true,
			},
		},
		methods: {
			removeCard: function () {
				console.log("aaa");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.card {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 5px 10px;
		border-radius: 10px;
		color: #000;

		& + & {
			margin-top: 10px;
		}

		&__button {
			border: none;
			background-color: red;
			color: #fff;
			border-radius: 5px;
			width: 20px;
			height: 20px;
			padding: 1px 0 0;
		}
	}
</style>