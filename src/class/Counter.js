import React from 'react'

// classs


class Counter extends React.Component{
    // 1. (order to be called in)
    // class thing where we call constructor in React component
    constructor(props){
        super(props)
        console.log('Counter constructor called')
        this.state = {count:0}
    }

    // 3. (order to be called in)
    componentDidMount(){
        console.log('Counter componentDidMount called')
        console.log('-----MOUNTING PHASE DONE-----')
    }

    // after component rerendered
    componentDidUpdate(prevProps, prevState){
        console.log('Counter componentDidUpdate called')
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)

        if(prevState.count === 10){     // checking if count is 10, then setState 
          this.setState({count: 0})     // so there is not an infinite loop, once it 
                                        // gets to 10 it updae
        }
    }


    increment = ()=>{
        let newCount = this.state.count +1
        console.log('Counter setState method called')
        this.setState({count: newCount})
    }


    componentWillUnmount(){
        console.log('Counter componentWillUnmount called')
        console.log('-----NO LONGER ON DOM: UNMOUNTED-----')
    }

    
    // 2. (order to be called in)
    // class componenent needs render function before returning JSX
    render(){
        console.log('Counter render called')
        return(
            <div style={{border:'3px solid pink'}}>
                <h1>Class Counter Component</h1>
                <h1>Class Counter:</h1>
                <p>count state in Class Counter: {this.props.someNumber}</p>
                <p>someNumber prop: {this.state.count}</p>
                <button onClick={this.increment}>add</button>
            </div>
        )
    }
}

export default Counter