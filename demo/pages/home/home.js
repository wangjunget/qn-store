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
    
  },
  onInputNameChange: function(e) {
    const { value } = e.detail
    this.store.data.userInfo.name = value
  },
  onInputSexChange: function(e) {
    const { value } = e.detail
    this.store.data.userInfo.sex = value
  }
})
