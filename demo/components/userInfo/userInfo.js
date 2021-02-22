import create from '../../../libs/create'


create.Component({
  use: ['userInfo'],
  mixins: [],
  data: {
    time: new Date().getTime(),
  },
  props: {},
  didMount() {
    console.log(this.data.userInfo)
    console.log(this)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
