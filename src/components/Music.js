import React, { useState } from 'react';

const Music = (props) => {

    const initialStateMusic = {
        key: null,
        title: "",
        description: "",
        published: false,
    }

    const [currentMusic, setCurrentMusic] = useState(initialStateMusic);
    const [message, setMessage] = useState('');
    
    return (

    );
}

export default Music;