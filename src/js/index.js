var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './component/header'

// ReactDOM.render(
//     <h1>Hello World.</h1>,
//     document.getElementById('example')
// );

class Index extends React.Component {
    render() {
        return (
            <ComponentHeader/>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));