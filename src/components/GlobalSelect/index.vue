<template>
  <el-select v-model="project" :remote-method="queryService" clearable filterable remote placeholder="请选择默认服务" @blur="blur" @change="change" @clear="clear">
    <el-option
      v-for="item in projectList"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>

<script>
import { queryProjectList } from '@/utils/query'
// import store from '@/store'

export default {
  name: 'GlobalSelect',
  data () {
    return {
      project: '',
      projectList: []
    }
  },
  // watch: {
  //   'store.state.project.serviceName': {
  //     handler: function (newer, older) {
  //       this.project = newer
  //     },
  //     deep: true
  //   }
  // },
  created () {
    this.projectList = queryProjectList()
    // this.project = this.$store.state.service.serviceName
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    blur ($event) {
      const targetValue = $event.target.value
      if (targetValue === '') {
        this.project = ''
        this.$store.commit('CLR_SERVICE')
      } else {
        const queryList = queryProjectList(targetValue)
        if (queryList.length !== 0) {
          this.project = queryList[0].value
          this.$store.commit('SET_SERVICE', this.project)
        }
      }
      this.projectList = queryProjectList()
    },
    change (value) {
      this.$store.commit('SET_SERVICE', this.project)
      this.projectList = queryProjectList()
    },
    clear () {
      this.$store.commit('CLR_SERVICE')
      this.projectList = queryProjectList()
    }
  }
}

</script>

<style scoped>

</style>
