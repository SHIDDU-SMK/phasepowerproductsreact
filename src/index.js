import React from 'react';
import ReactDOM from 'react-dom';
import NavBarTop from './navbarroutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dropdown.css';
import './assets/css/carousel.css';



class Index extends React.Component {
    render() {
      return (
          <div>
            <NavBarTop />
          </div>
      );
    }
  }
  ReactDOM.render(<Index />, document.getElementById('root'));
