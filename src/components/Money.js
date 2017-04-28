import React from 'react'

export const getDisplay = (amount) => {
  if(amount > 1e4 && amount < 1e6) {
    return (amount/1000).toFixed(3) + "k";
  } else if(amount >= 1e6 && amount < 1e9) {
    return (amount/1e6).toFixed(3) + "M";
  } else if(amount >= 1e9 && amount < 1e12) {
    return (amount/1e9).toFixed(3) + "B";
  } else if(amount >= 1e12 && amount < 1e15) {
    return (amount/1e12).toFixed(3) + "T";
  } else {
    return amount;
  }
}
const Money = ({amount}) => (
  <span>{getDisplay(amount)}</span>
)

export default Money
