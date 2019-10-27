import React, { Component } from 'react';
// Importasnt Aux from high order components folder
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Burger Control</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;