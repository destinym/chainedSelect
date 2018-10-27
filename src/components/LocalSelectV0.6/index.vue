<template>
  <div>
    <span v-show="header">服务名称:</span>
    <el-select v-model="project" :remote-method="queryService" default-first-option clearable filterable remote
               placeholder="请选择筛选服务"
               @blur="blur" @change="change" @clear="clear">
      <el-option
        v-for="item in projectList"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
  </div>
</template>

<script>
import {queryProjectList} from '@/utils/query'
import store from '@/store'

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
    '$store.state.project': {
      handler: function (newer, older) {
        this.project = newer
      }
    }
  },
  created () {
    this.projectList = queryProjectList()
    this.project = store.state.project
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    blur ($event) {
      if (this.projectList.length !== 0) {
        this.change(this.projectList[0].value)
      } else {
        this.clear()
      }
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
