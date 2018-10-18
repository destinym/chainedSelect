import Vuex from 'vuex'
import Vue from 'vue'
import {setCookie, getCookie} from '@/utils/cookie'
import {getProjectList} from '@/api/project'

Vue.use(Vuex)
const project = 'project'
const store = new Vuex.Store({
  state: {
    project: '',
    projectList: []
  },
  mutations: {
    SET_PROJECT_LIST (state, data) {
      state.projectList = data
    },
    SET_PROJECT (state, data) {
      state.project = data
      setCookie(project, data)
    }
  },
  actions: {
    Init ({commit}) {
      return new Promise((resolve, reject) => {
        const projectList = getProjectList()
        if (projectList !== undefined && projectList.length > 0) {
          commit('SET_PROJECT_LIST', projectList)
        }
        commit('SET_PROJECT', getCookie(project))
      })
    }
  }
})

export default store
