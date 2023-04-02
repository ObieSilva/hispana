import * as React from 'react';
import PrimaryButton from '@mui/material/Button';

const Button = ({title}) => {
  return (
    <PrimaryButton variant="contained">{title}</PrimaryButton>
  )
}

export default Button