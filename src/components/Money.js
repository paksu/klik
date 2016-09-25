import React from 'react'

const getDisplay = (amount) => {
  if(amount > 1e4 && amount < 1e6) {
    return (amount/1000).toFixed(2) + "k";
  } else if(amount >= 1e6 && amount < 1e9) {
    return (amount/1e6).toFixed(2) + "M";
  } else if(amount >= 1e9 && amount < 1e12) {
    return (amount/1e9).toFixed(2) + "B";
  } else if(amount >= 1e12 && amount < 1e15) {
    return (amount/1e12).toFixed(2) + "T";
  } else {
    return amount;
  }
}
const Money = ({amount}) => (
  <span>{getDisplay(amount)}</span>
)

export default Money
