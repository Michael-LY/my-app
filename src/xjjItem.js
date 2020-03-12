import React from 'react'

// class XiaojiejieItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleClick=this.handleClick.bind(this)
//     }
//     render () {
//         return (
//             <li onClick = {this.handleClick}>
//                 {this.props.content}
//             </li>
//         )
//     }

//     handleClick () {
//         // console.log(this.props.index)
//         this.props.deleteItem(this.props.index)
//     }
// }

//将class组件修改为function组件
function XiaojiejieItem (props) {
    const handelClick = function () {
        props.deleteItem(props.index)
    }

    return(
        <li key={props.index + props.item} onClick={handelClick}>
            {props.content}
        </li>
    )
}

export default XiaojiejieItem