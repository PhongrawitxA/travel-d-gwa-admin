import * as React from 'react';
import {useState,useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from "axios";
import './LogIn.css';
import SampleContext from '../../contexts/context';

export default function LogIn() {

  const {Url} = useContext(SampleContext)
  
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  const login = () => {  
      axios({
        method : "POST",
        data:{
          email : email,
          password : password
        },
        url: "${Url}/admin/signin",
      }).then( res => {
        if(res.status === 200){
          window.location.href='/dashboard';
        } else {
          window.location.href='/';
        }
      });
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await login();
    
    };

    return (
        <div className='Login' style={{display: 'flex',justifyContent:'center',position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <Box sx={{
                    width: 450,
                    height: '100%',
                    backgroundColor: '#1d3557',
                    textAlign:'center',
                    borderRadius:'41px',
                    paddingX:'30px',
                    paddingY:'50px',                  
            }}>
                <p className='righteous' style={{fontSize:50,color:'white'}}>
                    TravelDGwa
                </p>
                <hr sx={{marginTop:0}}/>
                <p className='thai' style={{fontSize:24,color:'white',fontWeight:'bold'}}>
                    เข้าสู่ระบบ
                    <br/>
                    Backend การจัดการเกี่ยวกับแอดมิน
                </p>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 , width:'100%',backgroundColor:'none'}}>
                    <TextField
                    margin="normal"
                    required
                    id="email"
                    placeholder='อีเมล'
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange = {e => setEmail(e.target.value)}
                    sx={{width:'80%',backgroundColor:'#ecfaff',borderRadius:'10px'}}
                    />
                    <br/>
                    <TextField
                    margin="normal"
                    required
                    name="password"
                    placeholder="รหัสผ่าน"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange = {e => setPassword(e.target.value)}
                    sx={{width:'80%',backgroundColor:'#ecfaff',borderRadius:'10px'}}
                    />
                    <Button
                    className='thai'
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , width:'80%',backgroundColor:'#3C6E71',borderRadius:'10px',paddingY:'12px',fontSize:25,fontWeight:'normal'}}
                    >
                    เข้าสู่ระบบ
                    </Button>
                </Box>
            </Box>
        </div>
    );
}