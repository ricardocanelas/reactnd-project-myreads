// External Depedencies
import React from 'react';
import withRouter from 'react-router-dom/withRouter'
import Link from 'react-router-dom/Link'
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';

const HeaderApp = (props) => {
    return (
        <Layout.Header>
            <div className="logo">
                <Link to='/'>MyReads</Link>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                selectedKeys={[props.location.pathname]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="/">
                    <Link to='/'>My Shelves</Link>
                </Menu.Item>

                <Menu.Item key="/search">
                    <Link to='/search'>Search</Link>
                </Menu.Item>

                <Menu.Item key="/about">
                    <Link to='/about'>About</Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default withRouter(HeaderApp);