import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const savedLists = localStorage.getItem("trello-lists");

const store = new Vuex.Store({
	state: {
		lists: savedLists
			? JSON.parse(savedLists)
			: [
					{
						title: "Backlog",
						cards: [{ body: "English" }, { body: "Mathematics" }],
					},
					{
						title: "Todo",
						cards: [{ body: "Science" }],
					},
					{
						title: "Doing",
						cards: [],
					},
			],
	},
	actions: {
		addlist(context, payload) {
			context.commit("addlist", payload);
		},
		removeList(context,payload) {
			context.commit("removeList",payload);
		},
		addCard(context,payload) {
			context.commit("addCard",payload);
		},
		removeCard(context,payload) {
			context.commit("removeCard",payload);
		}
	},
	mutations: {
		addlist(state, payload) {
			state.lists.push({ title: payload.title, cards: [] });
		},
		removeList(state,payload) {
			state.lists.splice([payload.listIndex],1);
		},
		addCard(state,payload) {
			state.lists[payload.index].cards.push({body: payload.text});
		},
		removeCard(state,payload) {
			console.log(state.lists[payload.listIndex].cards[payload.cardIndex]);
			state.lists[payload.listIndex].cards.splice([payload.cardIndex],1);
		}
	},
	getters: {},
});

store.subscribe((mutation, state) => {
	localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store;
