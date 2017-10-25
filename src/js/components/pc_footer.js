import React from 'react';
import {Row, Col} from 'antd';

export default class PCFooter extends React.Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 ReactNes. All Right Reserved.
                    </Col>
                </Row>
            </footer>
        )
    }
}