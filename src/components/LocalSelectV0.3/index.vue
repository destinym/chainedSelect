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
      p_project: ''
    }
  },
  props: {
    header: {
      type: Boolean,
      default: true
    },
    project: {
      type: String,
      default: ''
    }
  },
  created () {
    this.projectList = queryProjectList()
  },
  watch: {
    p_project: function () {
      this.$emit('change', this.p_project)
    }
  },
  methods: {
    queryService (query) {
      this.projectList = queryProjectList(query)
    },
    change (value) {
      this.p_project = value
      this.projectList = queryProjectList()
    }
  }
}

</script>
