# useReducer

state가 많아지면 관리가 힘듦  
const [state, dispatch] = useReducer(reducer, initialState, init);  
세번째 인자 지연초기화..잘안씀  
state는 직접 수정할 수 없음  
action을 만들어서 dispatch  
action을 어떻게 처리할지는 reducer에 기록
