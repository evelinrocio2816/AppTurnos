import { StyleSheet, Text, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottonTabNavigator from './BottonTabNavigator'  
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/medicApi'
import { setCameraImage } from '../features/auth/authSlice'

const MainNavigator = () => {
  
   const {user, localId}=useSelector(state =>state.auth)
   const dispatch=useDispatch()
   const {data,error, isLoading}=useGetProfileImageQuery(localId)

   useEffect(() => {
     if (data) {
      dispatch(setCameraImage(data.image))
    }
  }, [data])
  
   
    
  return  user? <BottonTabNavigator/> : <AuthStackNavigator/>
  
}

export default MainNavigator

const styles = StyleSheet.create({})