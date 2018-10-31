import Cookie from 'cookies-js';
import jwt from 'jwt-simple';
import { setCurrentUser } from '../actions/signin.actions';
// import logoutAction from '../actions/authentication/logoutAction';
// import userProfile from '../actions/profile/userProfile.action';

const setCurrentUserToStore = (store) => {
  const token = Cookie.get('jwtToken');
  if (token) {
    const decodedToken = jwt.decode(token, 'LifeIsARaceBeLikeWaterMakingItsWayThroughAllObjects');
    try {
      const isExpired = (decodedToken.exp < (Date.now() / 1000));
      if (!isExpired) {
        store.dispatch(setCurrentUser(decodedToken));
        // store.dispatch(userProfile(jwt.decode(token).username));
      } else {
        console.log('Logout here')
      }
    } catch (err) {
      console.log('Logout here')
    }
  }
};

export default setCurrentUserToStore;
