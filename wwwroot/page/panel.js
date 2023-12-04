export default {
  template: await (await fetch('./page/panel.htm')).text(),
  data() {
    return {
      sidebar_collapse: false
    }
  },
  async created() {

  },
  methods: {
    sidebar_collapse_switch() {
      return;
      this.sidebar_collapse = !this.sidebar_collapse;
    }
  },
}
