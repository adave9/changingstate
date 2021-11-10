import React from 'react';

class Cars extends React.Component{

    render(){
            return(
                    <div><p>This is a car function and its is {this.props.color} car.</p></div>
            );
    }
}

export default Cars;