import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {

    constructor(){
        super();
        this.state = {
            current: 'top'
        };
    }

    render() {
        return (
            <header>
                <Row>
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png"></img>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                </Row>
            </header>
        );
    };
}