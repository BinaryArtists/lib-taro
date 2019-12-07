import { useState, useEffect } from '@tarojs/taro'

export function useStore (store) {
  const [ state, setState ] = useState(store.get())

  function updateState () {
    setState(store.get())
  }

  useEffect(() => {
    store.subscribe(updateState)
    return () => store.unsubscribe(updateState)
  })

  return state
}

export * from './image.store';