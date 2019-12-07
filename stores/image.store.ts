/**
 * @Store https://github.com/deamme/laco
 */
import { Store } from 'laco';

export const ImageStore = new Store(
  {
    selected: []
  },
  'ImageStore'
)

export const selectImage = (val) => ImageStore.set(({selected}) => ({ selected: [...selected, ...val]}), 'Select image')

export const unselectImage = (key) => ImageStore.set(state => {
    let tempArr = [...state.selected];
    tempArr.splice(key, 1)
    return ({ selected: tempArr })
  }, 'Unselect image')

export const clearImages = () => ImageStore.set(state => ({
  selected: [] 
 }), 'Clear image')