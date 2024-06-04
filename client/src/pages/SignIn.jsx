import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  useDispatch,useSelector } from 'react-redux'
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'
export default function SignIn() {
  const [formData, setFormData] = useState({})
  const{loading, error: errorMessage} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (eve)=>{
    setFormData({...formData, [eve.target.id]: eve.target.value.trim()})
  }
  const handleSubmit  = async(eve)=>{
    eve.preventDefault()
    if(!formData.username || !formData.password ){
      return dispatch(signInFailure('Please fill out all the fields'))
    }
    try{
      dispatch(signInStart())
      const res=  await fetch('https://mern-blog-api-sepia.vercel.app/api/auth/signin',{
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success===false){
         dispatch(signInFailure(data.message))
      }
      
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    }
    catch (error) {
       dispatch(signInFailure(error.message))
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
      <Link to = "/" className='
         font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg text-white'>Ashmit's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
          hello guyss

        </p>
      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value = 'Your username'/>
            <TextInput
              type = 'text'
              placeholder='Username'
              id = 'username'  onChange={handleChange}
              />
          </div>
      
          <div>
            <Label value = 'Your Password'/>
            <TextInput
              type = 'password'
              placeholder='Password'
              id = 'password' onChange={handleChange}
              />
          </div>
          <Button gradientDuoTone='greenToBlue' type ='submit' disabled={loading}>
            {
              loading ? (
                <>
                 <Spinner size='sm'/>
               <span className='pl-3'>
                Loading...
               </span>
                </>
               
              ) : 'Sign In'
            }
          </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Don't have an account?</span>
          <Link to = '/sign-up' className='text-blue-500'>
            Sign Up
          </Link>
        </div>
        {
          errorMessage && (
            <Alert className ='mt-5' color= 'failure'>
            {errorMessage}
            </Alert>

          )
        }

      </div>
    </div>
    </div>
  )
}

