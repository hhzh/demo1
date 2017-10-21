var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './component/header'
import ComponentFooter from './component/footer'
import ComponentBody from './component/indexBody'

// ReactDOM.render(
//     <h1>Hello World.</h1>,
//     document.getElementById('example')
// );

class Index extends React.Component {
    render() {
        return (
            <div>
                <ComponentHeader/>
                <ComponentBody/>
                <ComponentFooter/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));