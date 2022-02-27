import { React, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

function useAuthUser(props) {
    useEffect(() => {
        const { setCurrentUser } = props;
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);
        });
        return () => {
            unsubscribeFromAuth();
          }
    }, []);
}
export default useAuthUser;