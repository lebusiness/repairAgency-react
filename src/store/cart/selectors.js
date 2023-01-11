const selectCartModule = (state) => state.cart;

export const cartSelectors = {
  selectCartItems: (state) => selectCartModule(state).entities,
};
