import React from 'react'
import { Text, View } from '@react-pdf/renderer'
const Disclaimer = ({styles, notes}) => (
    <View style={[styles.page, {fontSize:"7px", position: "absolute", bottom: "50px"}]}>
        <View>
            <Text style={[{marginBottom: "2px"}]}>Disclaimer</Text>
        </View>
        {notes.map((note, id)=>(
        <View key={id}>
            <Text style={{fontSize: "7px"}}>{id+1}: {note}</Text>
        </View>
        ))}
    </View>
)

export default Disclaimer
