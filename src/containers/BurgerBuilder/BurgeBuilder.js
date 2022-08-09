import React, { Component } from "react"
import Aux from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {...}
    // }
    state={
        ingredients:{
            salad:1,
            bacon:2,
            cheese:2,
            meat:1
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingedients={this.state.ingedients}/>
                 <div>Burger</div>
                <div>Build Controler</div> 
            </Aux>
        );
    }
}

export default BurgerBuilder;