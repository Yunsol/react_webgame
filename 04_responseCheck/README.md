# 조건문
삼항연산자  
~~~
{this.state.result.length === 0 ? null : <Component/>}
~~~

# 반복문  
~~~
{arry.map((v, i) => (<Component key={`${v.id}`} />))}
~~~

~~~
{(() => {
  const array = [];
  for (let i = 0; i < tries.length; i++) {
    array.push(<Component key={`${tries.id}`}/>);
  }
  return array;
})()}
~~~


# Hooks에서 변수사용
useRef사용  
실제 변수에 값 넣을때도 current에 넣어줌  
ex) 
~~~
const startTime = useRef();  
startTime.current = new Date();  
~~~
