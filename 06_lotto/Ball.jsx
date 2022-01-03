import React, { memo } from "react";

// Hooks가 아님. Hooks는 useState, useEffect를 사용하는거고 아래는 그냥 함수컴포넌트
// 컴포넌트를 다른 컴포넌트로 감싼건 high order컴포넌트(고차컴포넌트) HOC
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

// class Ball extends PureComponent {
//     render() {
//         const { number } = this.props;
//         let background;
//         if (number <= 10) {
//             background = 'red';
//         } else if (number <= 20) {
//             background = 'orange';
//         } else if (number <= 30) {
//             background = 'yellow';
//         } else if (number <= 40) {
//             background = 'blue';
//         } else {
//             background = 'green';
//         }
//         return (
//             <div className="ball" style={{background}}>{number}</div>
//         )
//     }
// }

export default Ball;
