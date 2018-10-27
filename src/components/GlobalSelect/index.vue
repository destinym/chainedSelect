<template>
  <el-select v-model="project" :remote-method="queryService" default-first-option clearable filterable remote placeholder="请选择默认服务" @blur="blur" @change="change" @clear="clear">
    <el-option
      v-for="item in projectList"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>

<script>
import { queryProjectList } from '@/utils/query'
import store from '@/store'

export default {
  name: 'GlobalSelect',
  data () {
    return {
      project: '',
      projectList: []
    }
  },
  created () {
    this.projectList = queryProjectList()
    this.project = this.$store.state.project
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    blur ($event) {
      if (this.projectList.length !== 0) {
        this.project = this.projectList[0].value
        this.change(this.project)
      } else {
        this.clear()
      }
      this.projectList = queryProjectList()
    },
    change (value) {
      store.commit('SET_PROJECT', this.project)
      this.projectList = queryProjectList()
    },
    clear () {
      store.commit('CLR_PROJECT')
      this.projectList = queryProjectList()
    }
  }
}

</script>

<style scoped>

</style>
