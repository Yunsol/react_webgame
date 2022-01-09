# ContextAPI

```
<TableContext.Provider>
```

성능최적화가 너무 어려움  
contextAPI사용하는 부모가 랜더링될때마다 자식들도 rerendering됨(useMemo로 캐싱해줘야함)
