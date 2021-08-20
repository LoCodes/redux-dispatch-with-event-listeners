// add code snippets from README
// let state = {count: 0}

let state 


// updates our state 
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }

}

// responsible for rendering the updated view  
function dispatch(action){
    state = reducer(state, action)
    render()
}

//render function to add in dispatch so every time dispatch is called it will render on page 

function render(){
    let container = document.getElementById('container')
    container.textContent = state.count
}


// renders 0 the initial state --- remember dispatch handles rendering 

dispatch({type: '@@INIT'})    


// added event listener on the button 
// increases 1 each time its clicked! 
// when calling dispatch function passing in the type of 

let button = document.getElementById('button');

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})