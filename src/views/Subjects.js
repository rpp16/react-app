import React from 'react';
import { FlexRow } from './FlexRow';
import { FlexCol } from './FlexCol';
  
const Text = {
    fontSize: 14,
    color: 'white',
    textAlign: 'left'
}
  
const NameStyle = {
    margin: 0,
    paddingLeft: '20px',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white'
}

export default function Subjects() {
    return (
        <div className="App">
            <div className="subjects">
                <FlexBox />
            </div>
        </div>
    )
}

const FlexBox = () => (
    <FlexCol container margin="auto" justifyContent="space-between">
        <FlexCol flex={1} margin="50px 32px 0 16px">
            <FlexRow container width="500px" height="325px" margin="auto">
                <FlexRow flex={1} margin="100px 32px 0 16px" className="box"> 
                    <p style={NameStyle}>REQUIRED</p>
                    <ul style={Text}>
                        <li>Transfiguration</li>
                        <li>Charms</li>
                        <li>Potions</li>
                        <li>History of Magic</li>
                        <li>Defence Against the Dark Arts</li>
                        <li>Astronomy</li>
                        <li>Herbology</li>
                        <li>Flying</li>
                    </ul>
                </FlexRow>
                <FlexRow flex={1} margin="100px 0 0 16px" className="box"> 
                    <p style={NameStyle}>OPTIONAL</p>
                    <ul style={Text}>
                        <li>Arithmancy</li>
                        <li>Muggle Studies</li>
                        <li>Divination</li>
                        <li>Study of Ancient Runes</li>
                        <li>Care of Magical Creatures</li>
                    </ul>
                </FlexRow>
            </FlexRow>
        </FlexCol>
    </FlexCol>     
)

// Menggunakan list untuk membuat daftar subjects