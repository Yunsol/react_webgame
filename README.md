# TypeScript
Javascript + Type = TypeScript 자바스크립트에 타입에 대한 내용을 확장시킨 것이 TS! 
## 사용이유 
JS는 동적 타입의 인터프리터 언어로 런타임시(프로그램 실행중일때)에 에러가 발견되지만 TS는 정적 타입의 컴파일 언어로 컴파일시점에 에러를 잡을 수 있다.  
TS는 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환됨  

### 자바스크립트 슈퍼셋(Superset)  
타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어  
유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환 가능  
#### es6 <-> typescript 변환: http://www.typescriptlang.org/play/

### TypeScript를 사용하여 .TS 파일을 .JS 파일로 변환하기
~~~terminal
Win
npm install –g typescript //현재 컴퓨터에 설치
npm install typescript //로컬로 설치(현재 위치의 폴더에 설치)

Mac os
$ sudo npm install -g typescript //현재 컴퓨터에 설치
$ sudo npm install typescript //로컬로 설치(현재 위치의 폴더에 설치)

$ tsc HelloWorld.ts
~~~

### 비주얼 스튜디오 코드(VSCode)로 자바스크립트 페어링
MS에서 만든 언어로 VSCODE와 짝짝꿍이 잘 됨  
에러 메시지는 에디터에만 표시되며 코드에는 영향을 주지 않음  
에러무시하는 법  
@ts-ignore - 해당 줄  
~~~typescript
interface User {
    age: number;
     name: string;
}

//@ts-ignore
let person: User = {
     age: 30
}
~~~

@ts-nocheck - 전체  
~~~typescript
//@ts-nocheck
interface User {
    age: number;
     name: string;
}

let person: User = {
     age: 30
}
~~~
해당 코드를 추가하여 타입 체크를 선택적으로 비활성화 할 수도 있습니다.  

## 기본 타입
### 변수에 타입 설정
~~~typescript
let str: string = 'hi';
let num: number = 100;

let arr: Array<Number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
 name: 'hoho',
 age: 22
};
~~~

### 함수에 타입 설정
~~~typescript
function add(a: number, b: number): number {
  return a+b;
}
//옵셔널 파라미터(?를 붙이면 넣어도되고 안넣어도 되고)
function log(a: string, b?: string, c?: string) {
  console.log(a);
}
~~~


### Tuple
배열의 타입 순서와 배열 길이를 지정할 수 있는 타입
~~~typescript
let arr: [string, number] = ['aa', 100];
~~~

#### Tuple과 Array 차이
튜플은 길이와 타입이 고정된 배열  
~~~javascript
const user1 = [1, 'setType77@example.com', '1q2w3e4r'];
const user2 = [2, 'anonymous@example.com', '1q2w3e4rvbf'];
const user3 = [3, 'imThree@example.com', '1q2w3e4rawrbrf'];
~~~

~~~typescript
let user1: [number, string, string];
user1 = [1, 'setType77@example.com', '1q2w3e4r']; //누군가 튜플의 타입 순서에 맞지 않게 데이터를 넣으려고 하면 에러가 표시
~~~

~~~typescript
let user1: [number, string, string];
user1 = [1, 'setType77@example.com', '1q2w3e4r'];

user1.push('fake'); // 에러없이 컴파일됩니다.
~~~
push 메서드를 사용하면 튜플 규칙을 무시하는 문제점이 있지만 배열의 타입 순서와 배열의 길이를 정할 수 있다는 점은 튜플의 유용한 특징

### Enum
Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입입니다. 값의 종류가 일정한 범위로 정해져 있는 경우에 유용합니다. 기본적으로 0부터 시작하며 값은 1씩 증가합니다.  
타입 범위가 너무 넓은 것 같다는 느낌이 들 때 enum을 사용해 리터럴의 타입과 값에 이름을 붙여서 코드의 가독성을 크게 높임  
상수집합의 선언이 필요한 경우 enum 을 사용하고 이는 기존 JS의 object 보다 속성값에 타입이 한정됨으로 오는 이점, 속성을 한정지을 수 있는 이점이 있다  
#### 객체와의 차이
 - object 는 코드내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum 은 선언할때 이후에 변경할 수 없습니다.
 - object 의 속성값은 JS가 허용하는 모든 타입이 올 수 있지만, enum 의 속성값으로는 문자열 혹은 숫자만 허용됩니다.  

~~~typescript
enum LanguageCode {
  korean = 'ko',
  english = 'en',
  japanese = 'ja',
  chinese = 'zh',
  spanish = 'es',
}
const code: LanguageCode = LanguageCode.korean
~~~

### Any
모든 데이터 타입을 허용합니다.  
컴파일 중 타입검사를 하지 않으므로 기존의 Javascript 와 같이 작업하기에 용이
~~~typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
~~~

### Void
변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.  
이 함수는 아무것도 반환하지 않아라는 의미
~~~typescript
const greetMaker = (phrase: string): void => {
	console.log(phrase);
};
~~~

### Never
항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미
~~~typescript
function invalid(message:string): never {
  throw new Error(message);
}
~~~

## Interface 
인터페이스는 타입을 정의한 규칙을 의미  
~~~typescript
interface User {
 age: number;
 name: string;
}
~~~
### 변수와 함수에 활용한 인터페이스
~~~typescript
interface User {
 age: number;
 name: string;
}

let person: User = {
 age: 30,
 name: 'aa'
}

function getUser(user: User) {
 console.log(user);
}
~~~

### 인덱싱
~~~typescript
interface StringArray {
 [index: number]: string;
}

let arr2: StringArray = ['a', 'b', 'c'];
arr2[0] = 10 //Error;
~~~

### 딕셔너리 패턴
~~~typescript
interface StringRegexDictionary {
 [key: string]: RegExp
}

let obj: StringRegexDictionary = {
 cssFile: /\.css$/,
 jsFile: 'a' //Error
}

obj['cssFile'] = /\.css$/;
obj['jsFile'] = 'a' //Error

let obj2: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
~~~

### 인터페이스 확장
~~~typescript
interface Person{
 name: string;
 age: number;
}

interface User extends Person{
 language: string;
}

// 인터페이스의 정의
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
// 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현
class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}
~~~

