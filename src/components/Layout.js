import React from "react";

import Sidebar from './sidebar/Sidebar';

function Layout(props) {
    // const children = props.children;
    return (
        <div>
            <Sidebar />
            {props.children}
        </div>
    );
}

export default Layout;