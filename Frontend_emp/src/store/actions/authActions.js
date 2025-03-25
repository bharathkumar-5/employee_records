import axios from 'axios';
import { setNotification } from './uiActions';

const API_URL = 'https://emp-83ki.onrender.com';
// const API_URL = 'http://localhost:4444';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });

    // Ensure credentials are being sent correctly
    console.log('Login Request Payload:', credentials);

    const response = await axios.post(`${API_URL}/auth/login`, credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Login Response:', response.data);

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: response.data
    });

    dispatch(setNotification({
      type: 'success',
      message: 'Login successful!'
    }));

    return response.data;
  } catch (error) {
    console.error('Login Error:', error);

    let errorMessage = 'Login failed';
    if (error.response) {
      errorMessage = error.response.data?.message || error.response.statusText;
    } else if (error.request) {
      errorMessage = 'No response from server. Please check your connection.';
    } else {
      errorMessage = error.message;
    }

    dispatch({
      type: 'AUTH_FAILURE',
      payload: errorMessage
    });

    dispatch(setNotification({
      type: 'error',
      message: errorMessage
    }));

    throw error;
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  dispatch(setNotification({
    type: 'info',
    message: 'You have been logged out'
  }));
};

export const checkAuthStatus = () => (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) {
    dispatch({ type: 'LOGOUT' });
    return false;
  }

  return true;
};













// import axios from 'axios';
// import { setNotification } from './uiActions';

// const API_URL = 'https://emp-83ki.onrender.com' ;
// // const API_URL = 'http://localhost:4444';

// export const login = (credentials) => async (dispatch) => {
//   try {
//     dispatch({ type: 'AUTH_REQUEST' });
    
//     const response = await axios.post(`${API_URL}/auth/login`, credentials);
    
//     dispatch({
//       type: 'AUTH_SUCCESS',
//       payload: response.data
//     });
    
//     dispatch(setNotification({
//       type: 'success',
//       message: 'Login successful!'
//     }));
    
//     return response.data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || 'Login failed';
    
//     dispatch({
//       type: 'AUTH_FAILURE',
//       payload: errorMessage
//     });
    
//     dispatch(setNotification({
//       type: 'error',
//       message: errorMessage
//     }));
    
//     throw error;
//   }
// };

// export const logout = () => (dispatch) => {
//   dispatch({ type: 'LOGOUT' });
//   dispatch(setNotification({
//     type: 'info',
//     message: 'You have been logged out'
//   }));
// };

// export const checkAuthStatus = () => (dispatch, getState) => {
//   const { token } = getState().auth;
  
//   if (!token) {
//     dispatch({ type: 'LOGOUT' });
//     return false;
//   }
  
//   return true;
// };
