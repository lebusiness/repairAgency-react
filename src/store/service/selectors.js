const selectServiceModule = (state) => state.service;

export const serviceSelectors = {
  selectService: (state) => selectServiceModule(state).entitie,
  selectServiceTitle: (state) => selectServiceModule(state).entitie.title,
  selectServiceFeedbacks: (state) => selectServiceModule(state).entitie.feedbacks,
  selectLoading: (state) => selectServiceModule(state).loading,
  selectError: (state) => selectServiceModule(state).error,
};
