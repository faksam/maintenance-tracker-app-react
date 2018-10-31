import Cookie from 'cookies-js';
import jwt from 'jwt-simple';
import { setCurrentUser } from '../actions/signin.actions';
import signoutUser from '../actions/signout.actions';

const setCurrentUserToStore = (store) => {
  const token = Cookie.get('jwtToken');
  if (token) {
    const decodedToken = jwt.decode(token, 'LifeIsARaceBeLikeWaterMakingItsWayThroughAllObjects');
    try {
      const isExpired = (decodedToken.exp < (Date.now() / 1000));
      if (!isExpired) {
        store.dispatch(setCurrentUser(decodedToken));
      } else {
        //store.dispatch(signoutUser());
      }
    } catch (err) {
      //store.dispatch(signoutUser());
    }
  }
};

export default setCurrentUserToStore;
