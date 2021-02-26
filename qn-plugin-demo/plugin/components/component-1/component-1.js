import create from '../../../../libs/create'
import store from '../../store/index'

create.Component(store, {
  use: [
    'userInfo'
  ],
  data: {
    name: 'gene'
  },
});
