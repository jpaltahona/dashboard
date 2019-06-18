import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to="/">
                        <span className="nuevo">Dashboard</span>
                    </Link>
                </li>
                <li>
                <Link to="/users">
                        <span className="nuevo">Users</span>
                    </Link>
                </li>
            </ul>
                    
        )
    }
}
export default Sidebar;