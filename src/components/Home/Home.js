import React from 'react';
import useAuthContext from '../../hook/useAuthContext';

const Home = () => {
    const { userProfile } = useAuthContext()
    return (
        <div>
            <h2>This is Home Compo</h2>
            <p>{userProfile?.displayName}</p>
        </div>
    );
};

export default Home;