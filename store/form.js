export const state = () => ({
  formsArray: [],
  formObject: {}
});

const mutations = {
  SET_FORMSARRAY(state, payload) {
    console.log('formsArray', payload);
    state.formsArray = [...payload];
  },
  SET_FORMSOBJECT(state, payload) {
    console.log('formObject', payload);
    state.formObject = { ...payload };
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
