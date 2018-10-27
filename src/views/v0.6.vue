<template>
  <div>
    <div>
      <h1> v0.6版本</h1>
    </div>
    <hr>
    <el-row>
      <NavSelect></NavSelect>
      全局服务: <GlobalSelect></GlobalSelect>
      <LocalSelect @value-change="setValue"></LocalSelect>
      <div>
        当前页面的项目为: {{ project}}
      </div>
    </el-row>
  </div>
</template>

<script>
import GlobalSelect from '@/components/GlobalSelect'
import NavSelect from '@/components/NavSelect'
import LocalSelect from '@/components/LocalSelectV0.6'
import store from '@/store'

export default {
  components: {
    GlobalSelect,
    LocalSelect,
    NavSelect
  },
  data () {
    return {
      project: ''
    }
  },
  created () {
    store.dispatch('Init')
  },
  methods: {
    setValue (val) {
      this.project = val
    }
  }
}
</script>
