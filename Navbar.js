import React from 'react';

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-info border border-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      My Cart
    </a>
  </div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Available item list
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">iPhone 15 Pro Max</a></li>
    <li><a class="dropdown-item" href="#">Samsung Galaxy 5G</a></li>
    <li><a class="dropdown-item" href="#">vivo V29 5G</a></li>
    <li><a class="dropdown-item" href="#">OnePlus 11R 5G</a></li>
  </ul>
</div>
</nav>

        );
    }
}
 
export default Navbar;