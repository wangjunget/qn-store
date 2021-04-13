import store from '/store/index'

Component({
  mixins: [],
  data: {
    show: true
  },
  props: {
    isShow: false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClose() {
      this.setData({
        show: false
      })
      store.data.popup.show = false
      console.log(this.props)
    }
  },
});
