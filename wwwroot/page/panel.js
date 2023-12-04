export default {
  template: await (await fetch('./page/panel.htm')).text(),
  data() {
    return {
      sidebar_class: [],
      sidebar_collapse: false
    }
  },
  async created() {

  },
  methods: {
    sidebar_collapse_switch() {
      this.sidebar_class.push('sidebar-collapse');
      this.sidebar_class.push('sidebar-open');
      this.sidebar_collapse = !this.sidebar_collapse;
    }
  },
}
