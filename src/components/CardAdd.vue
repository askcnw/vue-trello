<template>
	<form @submit.prevent="addCard" class="cardAdd">
		<input
			type="text"
			v-model="text"
			@focusin="startEditing"
			@focusout="finishEditing"
			:class="inputClassList"
			placeholder="Add new card"
		/>
		<button type="submit" v-if="isEditing || textExit" :class="buttonClassList">Add</button>
	</form>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				required: true,
			},
		},
		data() {
			return {
				text: "",
				isEditing: false,
			};
		},
		computed: {
			inputClassList() {
				const inputClassList = ["cardAdd__input"];
				if (this.isEditing) {
					inputClassList.push("cardAdd__input--active");
				}
				return inputClassList;
			},
			buttonClassList() {
				const buttonClassList = ["cardAdd__button"];
				if (this.textExit) {
					buttonClassList.push("cardAdd__button--active");
				}
				return buttonClassList;
			},
			textExit() {
				return this.text.length > 0;
			},
		},
		methods: {
			addCard: function () {
				this.$store.dispatch("addCard", {
					text: this.text,
					index: this.index,
				});
				this.text = "";
			},
			startEditing() {
				this.isEditing = true;
			},
			finishEditing() {
				this.isEditing = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.cardAdd {
		margin-top: 15px;
		&__input {
			border-radius: 10px;
			border: none;
			padding: 10px 10px;
			background: #ccc;

			&--active {
				background-color: #fff;
			}
		}

		&__button {
			border-radius: 10px;
			border: none;
			color: gray;
			margin-left: 5px;
			padding: 5px 10px;

			&--active {
				background-color: #00d78f;
				color: #fff;
				pointer-events: auto;
				cursor: pointer;
			}
		}
	}
</style>