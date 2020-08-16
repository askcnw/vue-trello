<template>
	<div class="card">
		<p>{{ body }}</p>
		<div @click="removeCard" class="card__button">✗</div>
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
			listIndex: {
				type: Number,
				require: true,
			},
		},
		methods: {
			removeCard: function () {
				if (confirm("本当にこのリストを削除しますか？")) {
					this.$store.dispatch("removeCard", {
						cardIndex: this.cardIndex,
						listIndex: this.listIndex,
					});
					this.$el.$destroy();
					this.$el.parentNode.removeChild(this.$el);
				}
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
			height: 20px;
			padding: 0 3px;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>