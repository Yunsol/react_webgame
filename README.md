# TypeScript
Javascript + Type = TypeScript 자바스크립트에 타입에 대한 내용을 확장시킨 것이 TS! 
## 사용이유 
JS는 동적 타입의 인터프리터 언어로 런타임시(프로그램 실행중일때)에 에러가 발견되지만 TS는 정적 타입의 컴파일 언어로 컴파일시점에 에러를 잡을 수 있다.  
TS는 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환됨  
### 자바스크립트 슈퍼셋(Superset)  
타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어  
유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환 가능  

### 비주얼 스튜디오 코드(VSCode)로 자바스크립트 페어링
비주얼 스튜디오 코드에는 편집기 또는 특정 작업 영역(프로젝트)에 대해 자바스크립트에서 타입스크립트 검사를 활성화 할 수 있는 설정이 포함되어 있습니다. .vscode/setting.json에 다음 코드를 추가할 수 있습니다.
~~~
{
 "Javascript.implicitProjectConfig.checkJs": true
}
~~~

이제 타입이 안전하지 않은 줄에는 에디터에서 해당 코드를 에러로 표시합니다. 이러한 에러 메시지는 에디터에만 표시되며 코드에는 영향을 주지 않습니다.  
@ts-ignore - 해당 줄  
@ts-nocheck - 전체  
해당 코드를 추가하여 타입 체크를 선택적으로 비활성화 할 수도 있습니다.  

## 기본 타입
### 변수에 타입 설정
~~~
let str: string = 'hi';
let num: number = 100;

let arr: Array = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
 name: 'hoho',
 age: 22
};
~~~

### 함수에 타입 설정
~~~
function add(a: number, b: number): number {
  return a+b;
}
//옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  console.log(a);
}
~~~

### Tuple
배열의 타입 순서와 배열 길이를 지정할 수 있는 타입
~~~
var arr: [string, number] = ['aa', 100];
~~~

### Enum
Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입입니다. 값의 종류가 일정한 범위로 정해져 있는 경우에 유용합니다. 기본적으로 0부터 시작하며 값은 1씩 증가합니다.  
~~~
enum Shoes {
 Nike = '나이키',
 Adidas= '아디다스'
}
~~~

### Any
모든 데이터 타입을 허용합니다.

### Void
변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.

### Never
특정 값이 절대 발생할 수 없을 때 사용합니다.

## Interface 
인터페이스는 타입을 정의한 규칙을 의미  
~~~
interface User {
 age: number;
 name: string;
}
~~~
### 변수와 함수에 활용한 인터페이스
~~~
var person: User = {
 age: 30,
 name: 'aa'
}

function getUser(user: User) {
 console.log(user);
}
~~~

### 인덱싱
~~~
interface StringArray {
 [index: number]: string;
}

var arr2: StringArray = ['a', 'b', 'c'];
arr[0] = 10 //Error;
~~~

### 딕셔너리 패턴
~~~
interface StringRegexDictionary {
 [key: string]: RegExp
}

var obj: StringRegexDictionary = {
 cssFile: /\.css$/,
 jsFile: 'a' //Error
}

obj['cssFile'] = /\.css$/;
obj['jsFile'] = 'a' //Error
~~~

### 인터페이스 확장
~~~
interface Person{
 name: string;
 age: number;
}

interface User extends Person{
 language: string;
}
~~~

