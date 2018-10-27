<template>
  <div>
    <span v-show="header">服务名称:</span>
    <el-select v-model="project" :remote-method="queryService" clearable filterable remote placeholder="请选择筛选服务" >
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

export default {
  name: 'LocalSelect',
  data: function () {
    return {
      projectList: [],
      project: ''
    }
  },
  props: {
    header: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.projectList = queryProjectList()
  },
  watch: {
    project: function () {
      this.$emit('value-change', this.project)
    }
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    change (value) {
      this.project = value
      this.projectList = queryProjectList()
    }
  }
}

</script>
