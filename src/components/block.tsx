import * as React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'KZT','CNY' ];

interface IBlockProps {
    value : number | string;
    currency : string;
    onChangeValue : any; 
    onChangeCurrency : any;
}

const Block: React.FunctionComponent<Partial<IBlockProps>> = (props) => {
    
    //Add dropdown logic
    const [dropOpen, setOpen] = React.useState(false);
    const handleDropdown = () => {
      setOpen(!dropOpen);
    };
  
    return (
    <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => props.onChangeCurrency(cur)}
          className={props.currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
      
      <li className='dropdown'>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      onChange={(e) => props.onChangeValue(e.target.value)}
      value={props.value == '' ? '' 
        : Number(Number(props.value).toFixed(2))}
      type="number"
      placeholder='0'
    />
  </div>
  );
};

export default Block;
