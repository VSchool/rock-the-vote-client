import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
        <Link to = "/profile"><button>Profile</button></Link>
        <Link to = "/public"><button>Public</button></Link>
        <Link><button>Logout</button></Link>
        </>
     );
}

export default Navbar;