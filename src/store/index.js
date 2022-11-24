import Vue from 'vue'
import Vuex from 'vuex'
import Http from 'Http'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    article: {}
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

    getArticle: async ({commit}, id) => {
      console.log(id)
      const response = await Http().get(`/articles/${id}`)
      console.log(response.data)
      await commit('setArticle', response.data.article)
    },

    createArticle: async ({dispatch}, body) => {
      const response = await Http().post(`/articles`, body)
      if (response.data.statusCode == 201) {
        dispatch('getArticles')
        router.push({name: 'Article'})
      } 
      return response.data
    },

    editArticle: async ({dispatch}, body) => {
      const response = await Http().put(`/articles/${body.externalId}`, body)
      if (response.data.statusCode == 200) {
        dispatch('getArticles')
        router.push({name: 'Article'})
      } 
      return response.data
    },

    deleteArticle: async ({dispatch}, id) => {
      const response = await Http().delete(`/articles/${id}`)
      if (response.data.statusCode == 200) {
        dispatch('getArticles')
        router.push({name: 'Article'})
      } 
      return response.data
    },

    clearArticles: async ({commit}) => {
      commit('clearArticles')
    }
  },

  mutations: {
    
    setArticles(state, articles) {
      state.articles = articles
    },

    setArticle(state, article) {
      state.article = article
    },


    clearArticles(state) {
      state.articles = []
    }
  }
}

)
