import React, {Component} from 'react';
import Loading from './loading.gif';


export class Spinner extends Component{

    render(){
        return (
            <>
            <div className="container text-center">
                <img src={Loading} alt="loading" className="my-3"/>
            </div>
               
            </>
        )
    }

}

export default Spinner