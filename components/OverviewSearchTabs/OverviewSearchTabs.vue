<template>
  <ul class="tabs">
    <li v-for="(tab, tabIndex) in tabs" :key="`${tab.search}${tabIndex}`">
      <nuxt-link
        :to="localePath({ name: tab.name, params: { search: tab.search } })"
      >
        <span>{{ $t(tab.label) }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './OverviewSearchTabs.scss';
</style>
