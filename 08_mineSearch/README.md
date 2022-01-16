# ContextAPI

여러 컴포넌트들에 전해줘야 하는 props의 경우 (예를 들면 선호 로케일, UI 테마) 이 과정이 번거로울 수 있습니다.  
context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있습니다.  
context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdgMqq5%2FbtqN8e464MD%2F6YFXLh1RKVEQyTrJGkhgiK%2Fimg.png"/>

## React.createContext

```
const MyContext = React.createContext(defaultValue)
```

전역 데이터를 담을 객체를 생성한다.  
defaultValue는 적절한 Provider 짝을 찾지 못할 때 사용되는 value

## Context.Provider

```
<TableContext.Provider value={전달할 값}>
 {value=><div>name: {value}</div>}
</TableContext.Provider>
```

## 성능최적화

성능최적화가 너무 어려움  
contextAPI사용하는 부모가 랜더링될때마다 자식들도 rerendering됨(useMemo로 캐싱해줘야함)
