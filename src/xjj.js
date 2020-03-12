import React, { useState } from "react"
import XiaojiejieItem from './xjjItem'

// class Xiaojiejie extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             inputValue: '',
//             list: [
//                 'base',
//                 'back'
//             ]
//         }
//         this.deleteItem=this.deleteItem.bind(this)
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <label htmlFor="service" >Add Service: </label>
//                     <input id="service" className = 'input' value={this.state.inputValue} onChange = {this.inputChange.bind(this)} />
//                     <button onClick = {this.addService.bind(this)}>Add Service</button>
//                 </div>

//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                                     return (
//                                             <div>
//                                                 <XiaojiejieItem 
//                                                     key = {index + item}
//                                                     content = {item}
//                                                     index = {index}
//                                                     deleteItem = {this.deleteItem}
//                                                 />
//                                             </div>
//                                         )
//                                 }
//                             )
//                     }
                    
//                 </ul>
//             </React.Fragment>
//         )
//     }

//     inputChange (e) {
//         // console.log(e.target.value)
//         this.setState({
//             inputValue: e.target.value
//         })
//     }

//     //添加服务
//     addService () {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: ''
//         })
//     }

//     //删除服务
//     deleteItem (index) {
//         // console.log(index)
//         let list = this.state.list
//         list.splice(index, 1)
//         this.setState({
//             list: list
//         })
//     }
// }

function Xiaojiejie (props) {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState(['back', 'foot', 'base'])

    const inputChange = function (e) {
        setInputValue (e.target.value)
    }

    const addService = function () {
        setList ([...list, inputValue])
    }

    const deleteItem = function (index) {
        const newList = list
        newList.splice(index, 1)
        setList (newList)
    }

    return (
        <React.Fragment>
            <div>
                <label htmlFor="service" >Add Service: </label>
                <input id="service" className='input' value={inputValue} onChange = {inputChange} />
                <button onClick = {addService}>Add Service</button>
            </div>

            <ul>
                {list.map((item, index)=>{
                    return (
                        <div>
                        <XiaojiejieItem 
                            key = {index + item}
                            content = {item}
                            index = {index}
                            deleteItem = {deleteItem}
                        /> 
                        </div>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}



export default Xiaojiejie