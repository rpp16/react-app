import React from 'react';
import { FlexRow } from './FlexRow';
import { FlexCol } from './FlexCol';
import gryffindor from '../images/gryffbg.png';
import ravenclaw from '../images/ravenbg.png';
import hufflepuff from '../images/hufflebg.png';
import slytherin from '../images/slythbg.png';
import '../App.css';

const ImageStyle = {
    width: '20%',
    height: '95%'
}

const Text = {
    fontSize: 13,
    color: 'white',
    textAlign: 'left'
}
  
const NameStyle = {
    margin: 0,
    paddingLeft: '12px',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white'
}

export default function Houses() {
    return (
        <div className="App">
            <div className="houses">
                <FlexBox />
            </div>
        </div>
    )
}

const FlexBox = () => (
    <FlexCol container margin="auto" justifyContent="space-between">
        <FlexCol flex={1} margin="50px 32px 0 16px">
            <FlexRow container width="800px" height="200px" margin="auto">
                <img 
                    src={gryffindor} 
                    alt="" 
                    className={ImageStyle}
                />
                <FlexRow flex={1} margin="10px 32px 0 16px"className="box"> 
                    <p style={NameStyle}>GRYFFINDOR</p>
                    <p style={Text}>
                        Founder     : Godric Gryffindor<br />
                        Values      : Bravery, daring, nerve and chivalry<br />
                        Animal      : Lion<br />
                        Element     : Fire<br />
                        Colour      : Scarlet and gold<br />
                        Location    : 7th floor, East Wing of Castle<br />
                    </p>
                </FlexRow>
                <img 
                    src={ravenclaw} 
                    alt=""
                    className={ImageStyle}
                />
                <FlexRow flex={1} margin="10px 0px 0 16px" className="box"> 
                    <p style={NameStyle}>RAVENCLAW</p>
                    <p style={Text}>
                        Founder     : Rowena Ravenclaw<br />
                        Values      : Intelligence, knowledge and wit<br />
                        Animal      : Eagle<br />
                        Element     : Air<br />
                        Colour      : Blue and bronze<br />
                        Location    : Tower, West Side of Castle<br />
                    </p>
                </FlexRow>
            </FlexRow>
        </FlexCol>
        <FlexCol flex={1} margin="50px 32px 0 16px">
            <FlexRow container width="800px" height="200px" margin="auto">
                <img 
                    src={hufflepuff}
                    alt="" 
                    className={ImageStyle}
                />
                <FlexRow flex={1} margin="10px 32px 0 16px" className="box"> 
                    <p style={NameStyle}>HUFFLEPUFF</p>
                    <p style={Text}>
                        Founder     : Helga Hufflepuff<br />
                        Values      : Hard work, dedication, patience and loyalty<br />
                        Animal      : Badger<br />
                        Element     : Earth<br />
                        Colour      : Yellow and black<br />
                        Location    : Basement, near Castle's Kitchen<br />
                    </p>
                </FlexRow>
                <img 
                    src={slytherin} 
                    alt=""
                    className={ImageStyle}
                />
                <FlexRow flex={1} margin="10px 0px 0 16px" className="box"> 
                    <p style={NameStyle}>SLYTHERIN</p>
                    <p style={Text}>
                        Founder     : Salazar Slytherin<br />
                        Values      : Ambition, cunning and resourcefulness<br />
                        Animal      : Snake<br />
                        Element     : Water<br />
                        Colour      : Emerald green and silver<br />
                        Location    : Beneath the Black Lake<br />
                    </p>
                </FlexRow>
            </FlexRow>
        </FlexCol>
    </FlexCol>
)

// Menggunakan FlexBox untuk implementasi daftar houses