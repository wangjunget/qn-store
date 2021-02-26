import create from '../../../../libs/create'
import store from '../../store/index'


create.Component(store, {
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
