import React from 'react';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';


export default function ProfilePage () {
    const user = useSelector(state => state.user);

    return (
        <Layout>
            <div className='profile-main'>
            <h3>Profile page</h3>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Country: {user.country}</li>
            </ul>  
            </div>
        </Layout>
    )
};
