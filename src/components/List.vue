<template>
	<li class="list">
		<div class="list__heading">
			<p class="list__title">{{ title }}</p>
			<div class="list__removeIcon" @click="removeList">✗</div>
		</div>
		<p class="list__cardTotals">card totals : {{ cardTotals }}</p>
		<draggable :options="{group:'lists'}" class="list__card">
			<Card
				v-for="(item,index) in lists[listIndex].cards"
				:key="item.id"
				:body="item.body"
				:cardIndex="index"
				:listIndex="listIndex"
			/>
		</draggable>
		<CardAdd :index="listIndex" />
	</li>
</template>

<script>
	import CardAdd from "./CardAdd";
	import Card from "./Card";
	import { mapState } from "vuex";
	import draggable from "vuedraggable";

	export default {
		components: {
			CardAdd,
			Card,
			draggable,
		},
		props: {
			title: {
				type: String,
				required: true,
			},
			listIndex: {
				type: Number,
				required: true,
			},
		},
		computed: {
			...mapState(["lists"]),
			cardTotals() {
				return this.lists[this.listIndex].cards.length;
			},
		},
		methods: {
			removeList: function () {
				if (confirm("本当にこのリストを削除しますか？")) {
					this.$store.dispatch("removeList", {
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
	.list {
		background-color: #ddd;
		border-radius: 10px;
		color: gray;
		padding: 15px 10px;
		display: inline-block;
		vertical-align: top;
		width: 250px;

		& + & {
			margin-left: 15px;
		}

		&__heading {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;
		}

		&__title {
			font-weight: bold;
			margin: 0;
		}

		&__cardTotals {
			color: blue;
		}

		&__removeIcon {
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>