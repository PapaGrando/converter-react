import * as React from 'react';
import Block from './block';

interface IConverterData{
  DataURL : string;
}
const Converter: React.FunctionComponent<IConverterData> = (props) => {

  const ratesRef = React.useRef({});

  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');

  const [toValue, setToValue] = React.useState(0);
  const [fromValue, setFromValue] = React.useState(0);

  React.useEffect(() => {
    onChangeFromValue(fromValue);
  }, [fromCurrency, fromValue, toCurrency, toValue])

  React.useEffect(() => {
    fetch(props.DataURL)
    .then(data => data.json())
    .then((json) => {

      let jsonRates = json.rates;
      jsonRates['RUB'] = 1; //Rub is base rate

      ratesRef.current = (jsonRates);

      console.info('current rates:')
      console.table(jsonRates)
    }).catch(e => {
      console.error('Failed to get information about the exchange rate')
      console.error(e);
    });
  }, []);

  const onChangeFromValue = (val : number) => {
    const baseVal = val / ratesRef.current[fromCurrency];
    const result = baseVal * ratesRef.current[toCurrency];

    setFromValue(val);
    setToValue(result);
  }

  const onChangeToValue = (val : number) => {
    const result = (ratesRef.current[fromCurrency] 
      / ratesRef.current[toCurrency]) * val;

    setToValue(val);
    setFromValue(result);
  }

  return (
    <div className='сonverter'>
      <Block value={fromValue} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeFromValue}/>

      <Block value={toValue} 
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToValue}/>  
    </div>
  );
}

export default Converter;
