const initialState = {
  articles: [{ title: "Zero article", id: 1 }]
};

//reducer is a pure function
// action is an object
function rootReducer(state = initialState, action) {
  if (action.type == "ADD_ARTICLE") {
    // state.articles.push(action.payload);
    return { articles: [...state.articles, action.payload] };
  }
  return state;
}

export default rootReducer;

// {
//     type:'ADD_ARTICLE',
// payload: {title: 'First article', id: 1}
// }
