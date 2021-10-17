import React from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hook/useAuthContext';

const Header = () => {
    const { userProfile, handelGoogleSignOut } = useAuthContext()
    return (
        <div>
            <h2>This is Header Compo</h2>
            {
                userProfile?.email && <button onClick={handelGoogleSignOut}>Google SignOut</button>
            }

            <br /><br /><br />
            <Link to="/home">Home/ </Link>
            <Link to="/details"> Details/</Link>
            <Link to="/register"> Register/</Link>
            <Link to="/login"> login</Link>
            <Link to=""></Link>
        </div>
    );
};

export default Header;