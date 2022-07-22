import React from 'react'
import Button from "../Button"
import{GmailButton, LoginButton} from "./Login1"
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios'
import{userotp,username} from "../../Redux/action"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
export const LoginInput = () => {
    const[number,setNumber]=React.useState()
    let navigate = useNavigate();
    const ref1=React.useRef()
    const state=useSelector((state)=>state)
    const dispatch=useDispatch()
    console.log(state,"chevk intial valie")

    const sendData=()=>{
        console.log(number)
        axios.post("http://localhost:8080/signup",{mobile:Number(number)})
        .then((data)=>{
            console.log(data,"recieved")
            console.log(data.data)
            dispatch(userotp(data.data.otp))
            dispatch(username(number))
            
        })
        // dispatch(userotp("12345"))
        // dispatch(username(number))
        // navigate("/otp",{replace:true})
        
    }

    const gmailData=()=>{
        window.location.href="http://localhost:8080/google"
    }


  return (
        <div style={{marginTop:"5%"}}>
        <h2 style={{marginLeft:"10%"}}>Login</h2>
        <p>Get access to your orders, lab tests & doctor consultations</p>

        <div>
            <input placeholder='Enter Mobile Number' type="text" pattern="\d*" maxlength="10" ref={ref1} style={{borderTop:"none",borderLeft:"none",borderRight:"none",width:"80%",margin:"10%"}} onChange={(e)=>setNumber(e.target.value)}/>
        </div>

        <LoginButton onClick={sendData}>Continue</LoginButton>

        <GmailButton onClick={gmailData}><GoogleIcon style={{marginTop:"5px",marginLeft:"-80px"}}/><p>signup with gmail</p></GmailButton>
        
    </div>

  )
}