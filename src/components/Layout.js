import React from "react";
import './Layout.scss';
import Sidebar from './sidebar/Sidebar';

function Layout(props) {
    // const children = props.children;
    return (
        <div className="layout">
            <Sidebar />
            {props.children}
        </div>
    );
}

export default Layout;