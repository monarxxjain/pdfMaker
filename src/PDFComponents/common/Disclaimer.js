import React from 'react'
import { Text, View } from '@react-pdf/renderer'
const Disclaimer = ({styles, notes}) => (
    <View style={[styles.page, styles.disclaimer1]}>
        <View>
            <Text style={styles.disclaimer2}>Disclaimer</Text>
        </View>
        {notes.map((note, id)=>(
        <View key={id}>
            <Text style={styles.font7}>{id+1}: {note}</Text>
        </View>
        ))}
    </View>
)

export default Disclaimer
