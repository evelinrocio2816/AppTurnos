import { StyleSheet, Text, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottonTabNavigator from './BottonTabNavigator'  
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/medicApi'
import { setCameraImage } from '../features/auth/authSlice'
import { fetchSession } from '../db'

const MainNavigator = () => {
  
   const {user, localId}=useSelector(state =>state.auth)
   const dispatch=useDispatch()
   const {data}=useGetProfileImageQuery(localId)

   useEffect(() => {
     if (data) {
      dispatch(setCameraImage(data.image))
    }
  }, [data])

  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession()
       // console.log('Esta es la sesion', session)
        if (session.rows.length) {
         // console.log(session.rows._array[0])
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        //console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])
    
  return  user? <BottonTabNavigator/> : <AuthStackNavigator/>
  
}

export default MainNavigator

const styles = StyleSheet.create({})