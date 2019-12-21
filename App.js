import React, { Component } from 'react'
import Shoppingcar from "./views/Shoppingcar"
import GoodsList from "./views/Goodslist"

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            component:<GoodsList fn={this.changeView.bind(this)}></GoodsList>
        }
    }
    
    changeView(view){
        switch(view){
            case "shoppingcar":
                this.setState({
                    component:<Shoppingcar></Shoppingcar>
                })
                break;
            case "goodsList":
                this.setState({
                     component:<GoodsList fn={this.changeView.bind(this)}></GoodsList>
                    })
                break;   
             default:   
             this.setState({
                component:<GoodsList fn={this.changeView.bind(this)}></GoodsList>
               })
           break;    
        }

    }

    render() {
        return (
            <div>
                <button onClick={this.changeView.bind(this,"goodsList")}>显示商品列表</button>  
                <button onClick={this.changeView.bind(this,"shoppingcar")}>显示购物车</button>   
                {this.state.component}
            </div>
        )
    }
}
