import React, { useState, Component } from "react"
import axios from "axios"
import XiaojiejieItem from './xjjItem'

/*
class Xiaojiejie extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue: '',
            list: []
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.addService = this.addService.bind(this)
    }

    // 从服务器请求远程接口
    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5e6a3a8bfae5d12c5d605333/ReactDemo01/xiaojiejie')
            .then((res)=>{
                console.log("axios 获取数据成功: " + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error)=>{console.log("axios 获取数据失败: " + error)})
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label htmlFor="service" >Add Service: </label>
                    <input 
                        id="service" 
                        className='input' 
                        value={this.state.inputValue} 
                        onChange={this.inputChange} 
                        ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.addService}>Add Service</button>
                </div>

                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item, index) => {
                                    return (
                                            <div>
                                                <XiaojiejieItem 
                                                    key={index + item}
                                                    content={item}
                                                    index={index}
                                                    deleteItem={this.deleteItem}
                                                />
                                            </div>
                                        )
                                }
                            )
                    }
                    
                </ul>
            </React.Fragment>
        )
    }

    inputChange () {
        // console.log(e.target.value)
        this.setState({
            inputValue: this.input.value
        })
    }

    // 添加服务
    addService () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    // 删除服务
    deleteItem (index) {
        // console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
        console.log(this.state.list)
    }
}
*/


// 将class组件修改为function组件
function Xiaojiejie (props) {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState(['back', 'foot', 'base'])

    const inputChange = function (e) {
        setInputValue (e.target.value)
    }

    const addService = function () {
        setList ([...list, inputValue])
        setInputValue ('')
    }

    const deleteItem = function (index) {
        let newList = list.slice()
        newList.splice(index, 1)
        setList (newList)
        console.log(list)
    }

    return (
        <React.Fragment>
            <div>
                <label htmlFor="service" >Add Service: </label>
                <input 
                    id="service"
                    className='input' 
                    value={inputValue} 
                    onChange={inputChange} 
                />
                <button onClick={addService}>Add Service</button>
            </div>

            <ul>
                {list.map((item, index)=>{
                    if (item.indexOf('a') === -1) {
                    return (
                        <XiaojiejieItem 
                            key = {index + item}
                            content = {item}
                            index = {index}
                            deleteItem = {deleteItem}
                        />
                    )}
                })}
            </ul>
        </React.Fragment>
    )
}


export default Xiaojiejie