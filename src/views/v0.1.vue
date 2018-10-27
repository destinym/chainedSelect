<template>
  <div>
    <div>
      <h1> v0.1版本</h1>
    </div>
    <hr>
    <el-row>
      <NavSelect></NavSelect>
      <div>
        <span>服务名称:</span>
        <el-select v-model="project" :remote-method="queryService" clearable filterable remote placeholder="请选择筛选服务">
          <el-option
            v-for="item in projectList"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <div>
          当前页面的项目为: {{ project}}
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import {queryProjectList} from '@/utils/query'
import NavSelect from '@/components/NavSelect'

export default {
  components: {
    NavSelect
  },
  data () {
    return {
      project: '',
      projectList: []
    }
  },
  created () {
    // to init data
    this.$store.dispatch('Init')
    this.projectList = queryProjectList()
  },
  methods: {
    queryService () {
      this.projectList = queryProjectList()
    }
  }
}
</script>
