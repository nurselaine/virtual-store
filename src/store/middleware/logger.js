const logger = (store) => (next) => (action) => {
  console.log('__action__', action);
  next(action); // next is Redux functionality that resumes think process 
}

export default logger;