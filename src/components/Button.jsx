import * as React from 'react';
import Button from '@mui/material/Button';

const button = ({title}) => {
  return (
    <Button variant="contained">{title}</Button>
  )
}

export default button