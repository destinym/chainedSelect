<template>
  <div>
    <el-col :span="6">
      <el-menu default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect">
        <el-menu-item index="/v0.1">
          <i class="el-icon-document"></i>
          <span slot="title">v0.1</span>
        </el-menu-item>
        <el-menu-item index="/v0.2">
          <i class="el-icon-document"></i>
          <span slot="title">v0.2</span>
        </el-menu-item>
        <el-menu-item index="/v0.3">
          <i class="el-icon-document"></i>
          <span slot="title">v0.3</span>
        </el-menu-item>
        <el-menu-item index="/v0.4">
          <i class="el-icon-document"></i>
          <span slot="title">v0.4</span>
        </el-menu-item>
        <el-menu-item index="/v0.5">
          <i class="el-icon-document"></i>
          <span slot="title">v0.5</span>
        </el-menu-item>
        <el-menu-item index="/v0.6">
          <i class="el-icon-document"></i>
          <span slot="title">v0.6</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'NavSelect',
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>
