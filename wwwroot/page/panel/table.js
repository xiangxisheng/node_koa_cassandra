import { fetchDataByPathname } from 'firadio';
export default {
  template: await (await fetch('./page/panel/table.htm')).text(),
  data() {
    return {
      currentPath: '',
      cql: '',
      rows: [],
      columns: [],
      loading: false,
      message: 'Hello Vue!'
    }
  },
  async created() {
    const data = await this.fetchDataByPathname('api/table', { keyspace_name: 'test', table_name: 'test' });
    console.log(data);
    this.rows = data.rows;
    this.columns = data.columns;
  },
  methods: {
    async fetchDataByPathname(_pathname, _param) {
      this.message = "Loading...";
      this.loading = true;
      const ret = await fetchDataByPathname(_pathname, _param);
      this.message = ret.message ? ret.message : ret.body;
      this.loading = false;
      return ret;
    },
  },
}
