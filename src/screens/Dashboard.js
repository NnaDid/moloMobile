import React ,{ useState } from 'react'
import { StyleSheet} from 'react-native'
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text, Input ,Spinner} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ICONS, COLORS, Logo} from '../constants';


const Dashboard = () => {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style ={styles.container}>
                        <Text>Welcome to the Dashboard</Text>
                </Layout>
            </ApplicationProvider>
      </>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})
