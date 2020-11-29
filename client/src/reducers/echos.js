export default (echos = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return echos
    default:
      return echos;
  }
} 