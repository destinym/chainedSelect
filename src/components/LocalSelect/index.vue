<template>
  <div>
    <span v-show="header">服务名称:</span>
    <el-select v-model="project" :remote-method="queryService" clearable filterable remote placeholder="请选择筛选服务" @blur="blur" @change="change" @clear="clear">
      <el-option
        v-for="item in projectList"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import { queryProjectList } from '@/utils/query'
import Element from 'element-ui'
// import store from '@/store'
import Vue from 'vue'
Vue.use(Element)

export default {
  name: 'LocalSelect',
  props: {
    header: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      projectList: [],
      project: ''
    }
  },
  watch: {
    project (val) {
      this.$emit('value-change', val)
    },
    'store.state.service.project': {
      handler: function (newer, older) {
        this.project = newer
        this.$emit('value-change', newer)
      },
      deep: true
    }
  },
  created () {
    this.projectList = queryProjectList()
    // this.project = this.$store.state.service.project
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    blur ($event) {
      const targetValue = $event.target.value
      if (targetValue === '') {
        this.project = ''
      } else {
        const queryList = queryProjectList(targetValue)
        if (queryList.length !== 0) {
          this.project = queryList[0].value
        }
      }
      this.projectList = queryProjectList()
    },
    change (value) {
      this.project = value
      this.projectList = queryProjectList()
    },

    clear () {
      this.project = ''
      this.projectList = queryProjectList()
    }
  }
}

</script>
