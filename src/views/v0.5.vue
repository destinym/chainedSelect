<template>
  <div>
    <div>
      <h1> v0.5版本</h1>
    </div>
    <hr>
    <el-row>
      <NavSelect></NavSelect>
      <LocalSelect @value-change="setValue"></LocalSelect>
      <div>
        当前页面的项目为: {{ project}}
      </div>
    </el-row>
  </div>
</template>

<script>
import LocalSelect from '@/components/LocalSelectV0.5'
import NavSelect from '@/components/NavSelect'
import store from '@/store'

export default {
  components: {
    NavSelect,
    LocalSelect
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
