import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../context/AuthContext';
import axios from 'axios';



const Chats = () => {

    const history = useHistory();
    const { user } = useAuth();
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/')
    }

    const [loading, setLoading] = useState(true);

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
    }

    useEffect(async () => {
        if (!user) {
            history.push('/');

            return;
        }

        await axios.get('https://api.chatengine.io/users/me/',
            {
                headers: {
                    'Project-ID': process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                    "User-Name": user.email,
                    "User-Secret": user.uid,
                }
            }
        ).then((res) => {

            setLoading(false);
        }).catch((err) => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.displayName);
            formdata.append('secret', user.uid);


            getFile(user.photoURL)
                .then(async (image) => {

                    formdata.append('image', image, image.name)

                    await axios.post('https://api.chatengine.io/users/', {
                        headers: {
                            "PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY
                        }, formdata
                    }).then((res) => {
                        setLoading(false);
                    }).catch((err) => {

                    })
                })
        })
    }, [user, history]);

    if (!user || loading) return 'Loading....';

    return (
        <div className="chats-page">
            <div className="nav-bar" >
                <div className="logo-tab">
                    ChatApp
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine

                height="calc(100vh - 66px)"
                projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Chats;
