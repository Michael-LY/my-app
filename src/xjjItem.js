import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render () {
        return (
            <li key={this.props.index + this.props.item} onClick = {this.handleClick}>
                {this.props.content}
            </li>
        )
    }

    handleClick () {
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

// //将class组件修改为function组件
// function XiaojiejieItem (props) {
//     const handelClick = function () {
//         props.deleteItem(props.index)
//     }

//     return(
//         <li key={props.index + props.item} onClick={handelClick}>
//             {props.content}
//         </li>
//     )
// }

//数据类型校验
XiaojiejieItem.prototypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

export default XiaojiejieItem