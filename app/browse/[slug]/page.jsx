import React from 'react';

const tracks = [
    {
        _id: 'EZ1348191',
        title: 'Making Process',
        desc: 'New Lofi music',
        creator: {
            username: 'Kuo Nhan Dung',
            email: 'nkeyskuo124@gmail.com',
        },
        price: 4.55,
        tags: ['Lofi', 'Soft', 'Jazz'],
        url: '/tracks/music1.mp3',
        statictics: null,
        likers: [],
    },
    {
        _id: 'EZ64353453',
        title: 'New Travel Sound',
        desc: 'New travel music',
        creator: {
            username: 'Kuo Nhan Dung',
            email: 'nkeyskuo124@gmail.com',
        },
        price: 7.55,
        tags: ['Ballad', 'Soft', 'Indie'],
        url: '/tracks/music2.mp3',
        statictics: null,
        likers: [],
    },
];

const page = () => {
    return <div>Browse</div>;
};

export default page;
