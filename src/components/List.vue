<template>
	<div class="list">
		<div class="list__heading">
			<p class="list__title">{{ title }}</p>
			<div class="list__removeIcon" @click="removeList">✗</div>
		</div>
		<div class="list__card">
			<Card
				v-for="(item,index) in lists[listIndex].cards"
				:key="item.id"
				:body="item.body"
				:cardIndex="index"
			/>
		</div>
		<CardAdd :index="listIndex" />
	</div>
</template>

<script>
	import CardAdd from "./CardAdd";
	import Card from "./Card";
	import { mapState } from "vuex";

	export default {
		components: {
			CardAdd,
			Card,
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
		padding: 5px 10px;
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

		&__removeIcon {
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>