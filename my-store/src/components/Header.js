import React from 'react';

class Header {
    constructor() {
        this.state = {
            title: '',
        }
    }

    componentDidMount() { // equal to useEffect in functional components
        this.setState((prevState) => ({
            ...prevState,
            title: 'I am the code'
        }))
    }

    render () {
        return (
            <div>
                {this.state.title}
            </div>
        )
    }
}


export default Header;
