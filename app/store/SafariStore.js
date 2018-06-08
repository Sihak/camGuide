import { types } from 'mobx-state-tree';

const Safari = types.model('Safari', {
    tittle: types.string,
    img: types.string,
    location: types.string,
})
