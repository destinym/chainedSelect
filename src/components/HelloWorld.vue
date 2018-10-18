<template>
  <div class="hello">
    <GlobalSelect></GlobalSelect>
    <hr>
    <LocalSelect></LocalSelect>

  </div>
</template>

<script>
import GlobalSelect from '@/components/GlobalSelect'
import LocalSelect from '@/components/LocalSelect'
import store from '@/store'

export default {
  components: {
    GlobalSelect,
    LocalSelect
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    store.dispatch('Init')
  },
  methods: {
  }
}
</script>
