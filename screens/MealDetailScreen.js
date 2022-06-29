import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId')

    const specificMeals = MEALS.filter(meal=>meal.id===mealId)[0]

    console.log(specificMeals,"sMeals")



    return (
        <View style={styles.categoriesScreen}>
            <Text>{specificMeals.title}</Text>
            <Button 
            title="Go Back to Categories"
            onPress={()=>props.navigation.popToTop()}
            />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal=>meal.id===mealId)
    return {
        headerTitle:selectedMeal.title
    }
}

const styles = StyleSheet.create({
    categoriesScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red"
    }
})

export default MealDetailScreen
