const selectServicesModule = (state) => state.services;

export const servicesSelectors = {
  selectServices: (state) => selectServicesModule(state).entities,
  selectLoading: (state) => selectServicesModule(state).loading,
  selectError: (state) => selectServicesModule(state).error,
};
