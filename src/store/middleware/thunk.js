const thunk = (store) => (next) => (actionOrFunctin) =>{
  typeof actionOrFunctin === 'function' 
  ? actionOrFunctin(store.dispatch, store.getState)
  : next(actionOrFunctin);
}

export default thunk;