
import axios from "axios";

//register user
export const registerUser =(name, phno, address, age, department, status, password) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(`/register`, {
        name,phno, address, age, department, status, password
      });

      dispatch({
        type: "RegisterSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

//login user
export const loginUser = (phno, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(`/login`, { phno, password });

    dispatch({
      type: "LoginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`/profile`);

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};

//logout user
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });
    const { data } = await axios.get(`/logout`);

    dispatch({
      type: "LogoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};

//delete user
export const deleteUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserRequest",
    });
    const { data } = await axios.delete(`/delete`);
    dispatch({
      type: "DeleteUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteUserFailure",
      payload: error.response.data.message,
    });
  }
};

//update user profile
export const updateProfile =(name, phno, address, age, department, status, password) => async (dispatch) => {
    try {
      dispatch({
        type: "UpdateUserRequest",
      });
      const { data } = await axios.put(
        `/update`,
        {
         name,phno, address, age, department, status, password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "UpdateUserSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateUserFailure",
        payload: error.response.data.message,
      });
    }
  };


  
//get all user details
export const getAllUsers =() => async (dispatch) => {
    try {
      dispatch({
        type: "AllUserRequest",
      });
      const { data } = await axios.get(
        `/allusers`
      );

      dispatch({
        type: "AllUserSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "AllUserFailure",
        payload: error.response.data.message,
      });
    }
  };