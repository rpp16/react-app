import React, { useState, useEffect } from 'react';
import Form from '../Form.js';
import { FlexRow } from './FlexRow';
import { FlexCol } from './FlexCol';
import '../App.css';

export default function Shops() {
    return (
        <div className="App">
            <div className="shops">
                <FlexBox />
            </div>
        </div>
    )
}

const FlexBox = () => (
    <FlexCol container margin="0" justifyContent="space-between">
        <FlexCol flex={1} margin="0 32px 0 16px">
            <FlexRow container width="500px" height="325px" margin="auto">
                <FlexRow flex={1}> 
                    <Form />
                </FlexRow>
                <FlexRow flex={1} margin="100px 0 0 16px"> 
                    <div className="convbox">
                        <Converter />
                    </div>                
                </FlexRow>
            </FlexRow>
        </FlexCol>
    </FlexCol> 
)    

function Converter(props) {
    const [show, setShow] = useState(true);
    const [state, setState] = useState({
        galleon: 0,
        dollar: 0
    });

    // Mengimplementasikan lifecycle method
    // componentDidMount
    useEffect(() => {
        console.log('DidMount');
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('DidUpdate');
    }, [state])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Unmounting')
        }
    }, [show])

    const onChangeGalleon = (galleon) => {
      let dollar = (parseFloat(galleon) * 6.64).toString();
      setState({ galleon, dollar });
    }
  
    const onChangeDollar = (dollar) => {
      let galleon = (parseFloat(dollar) / 6.64).toString();
      setState({ galleon, dollar });
    }
  
    const { galleon, dollar } = state;

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`galleon: ${galleon} dengan dollar: ${dollar}`)
    }

    return (
        <>
        <button className="rounded" onClick={() =>  setShow(!show)}>{show ? 'Unmount' : 'Mount'}</button>
        <form className="converter" onSubmit={onSubmit}>
            {show && <div>Hello</div>}<br />
            <CurrencyInput curLabel="G" currency={galleon} onChangeCurrency={onChangeGalleon} />
            <CurrencyInput curLabel="$" currency={dollar} onChangeCurrency={onChangeDollar} />
            <button type="submit" className="fullrounded" title="Convert"><i class="material-icons">import_export</i></button>
        </form>
        </>
    );
}

class CurrencyInput extends React.Component {
    _handleChange = (e) => {
        this.props.onChangeCurrency(e.target.value);
    }
  
    render() {
        const { curLabel, currency } = this.props;

    return (
        <>
            <label>
                {curLabel === 'G' ? 'Galleon ' : 'Dollar '}:
                <input type="number" className="currencyInput" value={currency} onChange={this._handleChange} />
                <br />
            </label>
            <br />
        </>
    )}
}

// Menggunakan hooks berupa {useState, useShow} dan implementasi lift state up