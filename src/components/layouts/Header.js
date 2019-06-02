import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/photo">Photos</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
