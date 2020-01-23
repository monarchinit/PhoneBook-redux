export const deleteItem = (state, payload) =>
  state.filter(elem => elem.id !== payload);

export const transform = tasks => {
  return Object.keys(tasks).map(task => {
    return {
      id: task,
      ...tasks[task]
    };
  });
};
