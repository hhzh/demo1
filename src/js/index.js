import ComponentHeader from './component/header'
import ComponentFooter from './component/footer'
import ComponentBody from './component/indexBody'
var React = require('react');
var ReactDOM = require('react-dom');

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