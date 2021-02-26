import create from '../../../libs/create'
import store from '../../store/index'

create.Page(store, {
  use: [
    'userInfo'
  ],
  data: {
    name: 'gene'
  },
  onLoad: function() {
    
  }
})
