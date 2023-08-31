import axios from "axios";


export const userLogin = ({email, password})=> async (dispatch) => {
        const body ={
            email,
            password
        }
        try{
            const res = await axios.post(`${process.env.REACT_APP_URL}user/login`, body)
            console.log(res)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data
            });
            return {res}

        }
        catch(err) {
            throw err
        }
}

export const userLogOut = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT_SUUCCESS'
      });
}