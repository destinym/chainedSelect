import Vuex from 'vuex'
import Vue from 'vue'
import {setCookie, getCookie, clearCookie} from '@/utils/cookie'
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
    },
    CLR_PROJECT (state) {
      state.prject = ''
      clearCookie(project)
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
  },
  getters: {
    projectList: state => state.projectList,
    globalProject: state => state.project
  }
})

export default store
