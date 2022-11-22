import Vue from 'vue'
import Vuex from 'vuex'
import Http from 'Http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },

  actions: {
    getArticles: async ({ state, commit}, params) => {

      let skip = params.loadIteration * 10
      if (skip == 0) await commit('clearArticles')
      let sortBy = params.sortBy
      const response = await Http().get(`/articles?limit=10&skip=${skip}${sortBy.length > 0 ? '&sortBy=' + sortBy : ''}`)
      console.log(response.data)
      let articles = state.articles
      articles.push(...response.data.articles)
      commit('setArticles', articles)

    },

    searchArticles: async ({state, commit}, params) => {
      console.log(params)
      let skip = params.loadIteration * 10
      if (skip == 0) await commit('clearArticles')
      let sortBy = params.sortBy
      let title = params.title
      const response = await Http().get(`/searchArticles?limit=10&skip=${skip}&search=${title}${sortBy.length > 0 ? '&sortBy=' + sortBy : ''}`)
      response.data.articles.forEach(o => console.log(o.externalId))
      let articles = state.articles
      articles.push(...response.data.articles)
      commit('setArticles', articles)

    },

    clearArticles: async ({commit}) => {
      commit('clearArticles')
    }
  },

  mutations: {
    
    setArticles(state, articles) {
      state.articles = articles
    },

    clearArticles(state) {
      state.articles = []
    }
  }
}

)
