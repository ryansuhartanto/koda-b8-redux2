/**
 * @typedef TodoItem
 * @prop {boolean} done
 * @prop {string} todo
 */

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		/** @type {TodoItem[]} */
		todos: [],
	},
	reducers: {
		addTask(state, action) {
			state.todos.push(action.payload);
			return state;
		},
		removeTask(state, action) {
			state.todos.splice(action.payload, 1);
			return state;
		},
	},
});

export default todoSlice;
export const { addTask, removeTask } = todoSlice.actions;
