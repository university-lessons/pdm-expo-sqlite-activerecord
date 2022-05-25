import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Car from './src/services/sqlite/Car'

/**
 * Example Car Object: {
 *  id: (auto generated in sqlite), 
 *  brand: 'citroen',
 *  model: 'ds3 performance',
 *  hp: 208
 * } 
 */
const printCar = (car) => {
  console.log(`id:${car.id}, brand:${car.brand}, model:${car.model}, hp:${car.hp}`)
}

export default function App() {

  //forced error catch
  Car.find( -1 ) 
    .then( car => printCar(car) )
    .catch( err => console.log(err) )

  //create
  Car.create( {brand:'vw', model:'brasilia', hp:65} )
    .then( id => console.log('Car created with id: '+ id) )
    .catch( err => console.log(err) )

  Car.create( {brand:'vw', model:'fusca', hp:34} )
    .then( id => console.log('Car created with id: '+ id) )
    .catch( err => console.log(err) )

  Car.create( {brand:'ford', model:'corcel', hp:70} )
    .then( id => console.log('Car created with id: '+ id) )
    .catch( err => console.log(err) )

  //find id=1
  Car.find( 1 ) 
    .then( car => printCar(car) )
    .catch( err => console.log(err) )

  //find brand=vw
  Car.findByBrand( 'vw' ) 
    .then( cars => console.log(cars) )
    .catch( err => console.log(err) )

  //update
  Car.update( 1, {brand:'gm', model:'corsa', hp:70} )
    .then( updated => console.log('Cars updated: '+ updated) )
    .catch( err => console.log(err) )
  
  //all
  Car.all()
    .then( 
      cars => cars.forEach( c => printCar(c) )
    )

  //delete
  Car.remove(1)
    .then( updated => console.log('Cars removed: '+ updated) )
    .catch( err => console.log(err) )
  
  Car.remove(2)
    .then( updated => console.log('Cars removed: '+ updated) )
    .catch( err => console.log(err) )

  Car.remove(3)
    .then( updated => console.log('Cars removed: '+ updated) )
    .catch( err => console.log(err) )

  //forced empty array (all=[])
  Car.all()
    .then( 
      cars => console.log(cars)
    )

  return (
    <View style={styles.container}>
      <Text>(Check Console)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});
