import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  error: {},
  vaults: {},
  myVaults: {},
  activeVault: {},
  myKeeps: {},
  activeKeep: {},
  //Dummy Data
  keeps: [{
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }],
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store ({
  // ALL DATA LIVES IN THE STATE
  state,

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setmyVaults(state, myVaults) {
      state.myVaults = myVaults
    },
    setActiveVault(state, activeVault) {
      state.activeVault = activeVault
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setActiveKeep(state, activeKeep) {
      state.activeKeep = activeKeep
    },
    setmyKeeps(state, myKeeps) {
      state.myKeeps = myKeeps
    }

  },

  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    //User Actions

    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit("setUser", res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },
    getAuth() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/vaults')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    clearError() {
      state.error = {}
    },
    //Vault Actions
    getVaults({commit, dispatch}) {
      api('/userVaults')
      .then(res => {
        commit('setVaults', res.data.data)
      })
      .catch(handleError)
    },
    getVault({commit, dispatch}, id) {
      api('/vaults/' + id)
      .then(res => {
        commit('setActiveVault', res.data.data)
      })
      .catch(handleError) 
    },
    createVault({commit, dispatch}, vault) {
      api.post('/vaults/', vault)
      .then(res => {
        dispatch('getVaults')
      })
      .catch(handleError)
    },
    removeVault({commit, dispatch}, vault) {
      api.delete('/vaults/' + vault._id)
      .then(res => {
        dispatch('getVaults')
      })
      .catch(handleError)
    },
    //Keep Actions
    getKeeps({commit, dispatch}, id) {
      api('/vaults/' + id + '/keeps/')
      .then(res => {
        commit('setKeeps', res.data.data)
      })
      .catch(handleError)
    },
    getKeep({commit, dispatch}, id) {
      api('/keeps/' + id)
      .then(res => {
        commit('setActiveKeep', res.data.data)
      })
      .catch(handleError)
    },
    createKeep({commit, dispatch}, keep) {
      api.post('/keeps' + keep)
      .then(res => {
        dispatch('getEncounters', keep.vaultId)
      })
      .catch(handleError)
    },
    removeKeep({commit, dispatch}, keep) {
      api.delete('/keeps/' + keep._id)
      .then(res => {
        dispatch('getKeeps', keep.vaultId)
      })
      .catch(handleError)
    }
  }
})


  