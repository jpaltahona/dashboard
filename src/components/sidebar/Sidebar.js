import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss'; 

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
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
            </div>           
        )
    }
}
export default Sidebar;