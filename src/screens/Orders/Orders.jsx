

import { FlatList, Text, View } from 'react-native'

import React from 'react'
import styles from './Orders.styles'
import { Header } from '../../components'
import { useGetOrdersQuery } from '../../services/medicApi'

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery()
  use

  return (<>
    <Header title={'Mis turnos'}/>
    <View styles={styles.container}>
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item}</Text>}
          key={item => item}
        />
      )}
    
    </View>
    </>
  )
}

export default Orders