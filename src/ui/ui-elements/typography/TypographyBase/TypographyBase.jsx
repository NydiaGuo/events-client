import React from 'react'
import { Typography } from '@material-ui/core'
/* User */
/* Dev */
// eslint-disable-next-line
import { green as greenl } from 'logger'
// import Typography from '../Typography'


const TypographyBase = ({
  align,
  children,
  classes,
  className,
  color,
  gutterBottom = false,
  noWrap,
  variant
}) => {
  const style = {
    color: color,
  }


  return (
    <Typography
      align={align}
      classes={classes}
      style={style}
      noWrap={noWrap}
      variant={variant}
      gutterBottom={gutterBottom}
    >
      {children}
    </Typography>
  )

}

export default TypographyBase