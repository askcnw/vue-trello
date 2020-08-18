<template>
	<div class="board">
		<header class="header">
			<h1 class="header__title">my Trello</h1>
		</header>
		<main>
			<div class="board__heading">
				<p class="board__totals">All Task: {{ totals }}</p>
				<ListAdd />
			</div>
			<draggable element="ul" class="board__main">
				<List v-for="(item,index) in lists" :key="item.id" :title="item.title" :listIndex="index" />
			</draggable>
		</main>
	</div>
</template>

<script>
	import ListAdd from "./ListAdd";
	import List from "./List";
	import { mapState } from "vuex";
	import draggable from "vuedraggable";

	export default {
		components: {
			ListAdd,
			List,
			draggable,
		},
		computed: {
			...mapState(["lists"]),
			totals() {
				return this.lists.length;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		&__title {
			color: #fff;
		}
	}

	.board {
		&__heading {
			align-items: center;
			display: flex;
			margin-bottom: 10px;
			padding-bottom: 8px;
		}

		&__totals {
			display: inline-block;
			margin: 0;
		}

		&__main {
			white-space: nowrap;
			padding: 0;
		}
	}
</style>
