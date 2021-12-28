import React, {PureComponent, memo} from 'react';

// props를 받는곳이지만 보통 구조분해해서 쓴다
const Try = memo(({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

// class Try extends PureComponent {
//     render(){
//         const {tryInfo} = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }

export default Try;