import React from 'react'

const getDisplay = (amount) => {
  if(amount > 1e4 && amount < 1e6) {
    return (amount/1000).toFixed(2) + "k";
  } else if(amount > 1e6 && amount < 1e9) {
    return (amount/1000000).toFixed(2) + "M";
  } else {
    return amount;
  }
}
const Money = ({amount}) => (
  <span>{getDisplay(amount)}</span>
)

export default Money
