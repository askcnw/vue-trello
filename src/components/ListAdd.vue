<template>
	<form class="listAdd" @submit.prevent="addList">
		<input
			type="text"
			v-model="title"
			placeholder="Add new list"
			:class="inputClassList"
			@focusin="startEditing"
			@focusout="finishEditing"
		/>
		<button type="submit" :class="buttonClassList" v-if="isEditing || titleExists">Add</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				isEditing: false,
			};
		},
		computed: {
			inputClassList() {
				const inputClassList = ["listAdd__input"];
				if (this.isEditing) {
					inputClassList.push("listAdd__input--active");
				}
				return inputClassList;
			},
			buttonClassList() {
				const buttonClassList = ["listAdd__button"];
				if (this.titleExists) {
					buttonClassList.push("listAdd__button--active");
				}
				return buttonClassList;
			},
			titleExists() {
				return this.title.length > 0;
			},
		},
		methods: {
			addList: function () {
				this.$store.dispatch("addlist", { title: this.title });
				this.title = "";
			},
			startEditing: function () {
				this.isEditing = true;
			},
			finishEditing: function () {
				this.isEditing = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.listAdd {
		display: inline-block;
		vertical-align: top;
		margin-left: 15px;

		&__input {
			background-color: #ddd;
			border-radius: 10px;
			border: none;
			display: inline-block;
			padding: 10px;

			&--active {
				background-color: #fff;
			}
		}

		&__button {
			color: #fff;
			display: inline-block;
			border: none;
			border-radius: 10px;
			background-color: gray;
			font-size: 12px;
			padding: 10px;
			margin-left: 10px;

			&--active {
				background-color: #00d78f;
				pointer-events: auto;
				cursor: pointer;
			}
		}
	}
</style>
