import React from 'react';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

export default function PushToggle () {
    return (
        <div className='push-wrapper'>
            <div className="push">
                Subscribe here: 
                <SubscriptionsIcon
                className='push__image' />
            </div>
        </div>

    )
}