import { GET_ME, GET_AUTHOR_BY_ID } from "~/gql/query";

export const state = () => ({
  user: {},

  isAuthenticated: false
});

export const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
};

export const mutations = {
  setUser(state, param) {
    state.isAuthenticated = true;
    state.user = param.user;

    // if(param.isLogin){
    this.$router.push("/");
  },

  logoutUser(state) {
    this.$apolloHelpers.onLogout();
    state.isAuthenticated = false;
    state.user = null;
    this.$router.push("/login");
  }
};

export const actions = {
  async nuxtServerInit({ commit }, context) {
    let client = context.app.apolloProvider.defaultClient;

    const token = this.$apolloHelpers.getToken();
    if (token) {
      try {
        const { data } = await client.query({ query: GET_ME });
        commit("setUser", { user: data.me, isLogin: false });
      } catch (error) {
        commit("logoutUser");
        console.log(error);
      }
    } else {
      commit("logoutUser");
    }
  }
};
export const action = {
  async nuxtServerInit({ commit }, context) {
    try {
      const { id } = await client.query({ GET_AUTHOR_BY_ID });
      commit("authorprofile", { id: id });
      return this.$router.push("/profile/${id}");
    } catch (error) {
      console.log(error);
    }
  }
};
