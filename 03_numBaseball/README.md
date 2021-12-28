# import 와 require 차이
import : 
require : node module system
export되는게 객체나 배열이면(default로 export한게 아니면... export const) 구조분해({module})
export default ~ >> ES2015문법

# React 반복문
key는 고유하게 만들되 index와 같은 순서는 넣지 않는게 좋음(성능최적화)
만약 계속 추가만되는 반복문이라면 index를 key에 넣어도 괜찮음

# React Dev Tool
## 크롬 확장프로그램 설치
React Developer Tools 필수!!

# shouldComponentUpdate
성능체크: 크롬 개발자툴 react developer tools에서 톱니바퀴 > Highlight updates when components render 체크
붉게 하이라이팅 될수록 많이 렌더링 된다는 뜻
state나 props가 바뀔때 render 다시 호출로 알고있지만 setState만 호출하면 렌더링이 다시 일어남
shouldComponentUpdate에 다음값과 현재값이 다르면 렌더링을 다시 하도록 조작가능 (return true일때 다시 렌더링됨)


# PureComponent
shouldComponentUpdate 로직을 알아서 구현한 컴포넌트
object나 array와 같이 참조하는 데이터는 비교를 못함(새로운 객체 혹은 배열로 만들면 비교가능)
객체안에 배열넣거나 배열안에 객체넣는 데이터는 state에 넣는건 지양하는게 좋음. 간단한것만 state에
컴포넌트를 작게 쪼갤수록 PureComponent사용하기 용이함
렌더링 시점을 커스텀하고싶을때 shouldComponentUpdate를 사용함

# memo
Hooks에서 사용하는 최적화 함수
제일 자식컴포넌트에  memo함수를 씌움
자식들이 모두 pureComponent나 memo면 부모컴포넌트에도 사용가능

# React.createRef
~~~
inputRef = createRef();
this.inputRef.current.focus();
~~~
current를 사용함으로 Hooks와 Class 소스에 통일성이 있어짐
~~~
onInfutRef = (c) => {
    // 커스텀하여 사용할수 있어서 좋음.. 자유도가 늘어남
}
~~~

# props와 state연결하기
render안에는 절대 setState를 쓰면 안됨(무한렌더링)
부모한테 받은 props는 절대 자식컴포넌트에서 바꾸면 안됨!!
props를 바꾸고 싶을 때는 props를 state에 넣어준다. 
Hooks에서는 useState사용하여 props를 state화
class는 state = {result: this.props.result};처럼 그냥 state에 props를 넣어줌
constructor를 사용하면 좀 더 정밀한 작업 가능(값을 변경하여 state에 넣는다거나..)

자식의 자식의 자식의 자식...컴포넌트에 props를 넘길때 redux사용하거나 context를 사용