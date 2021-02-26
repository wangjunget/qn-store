import create from '../../../libs/create'
import store from '../../store/index'

create.Page(store, {
  data: {},
  onLoad() {
    console.log(this)
  },
});
