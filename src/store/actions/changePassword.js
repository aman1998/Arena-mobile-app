import axios from "../../axios/axios";
import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from '../actionTypes'

export const sendPhoneActionCreator = (body, setSendPhone, setActivateOtp, setPhone) => dispatch => {
  dispatch({ type: FETCH_LOADING })
    axios.post('/reset-otp/', body)
      .then(({data}) => {
        console.log(data)
        if(data.status) {
          dispatch({ type: FETCH_SUCCESS })
          setSendPhone(false)
          setActivateOtp(true)
          setPhone(body.phone)
        }
        else {
          dispatch({ type: FETCH_FAILED })
        }
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED })
        console.log(e)
      })
}

export const activateOtpActionCreator = (body, setOtp, setActivateOtp, setChangePassword) => dispatch => {
  dispatch({ type: FETCH_LOADING })
    axios.post('/reset-otp/verify/', body)
      .then(({data}) => {
        if (data.status && body.otp) {
          dispatch({ type: FETCH_SUCCESS })
          setOtp(body.otp)
          setActivateOtp(false)
          setChangePassword(true)
        }
        else {
          dispatch({ type: FETCH_FAILED })
        }
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED })
        console.log(e)
        setActivateOtp(true)
        setChangePassword(false)
      })
}

export const changePasswordActionCreator = (body, setChangePassword, setSuccess) => dispatch => {
  dispatch({ type: FETCH_LOADING })
    axios.post('/pass-change/', body)
      .then(() => {
        dispatch({ type: FETCH_SUCCESS })
        setChangePassword(false)
        setSuccess(true)
      })
      .catch(e => {
        console.log(e)
        dispatch({ type: FETCH_FAILED })
        setChangePassword(true)
        setSuccess(false)
      })
}