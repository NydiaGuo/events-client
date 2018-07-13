import React, { Component } from 'react'
import { Field } from 'redux-form'
// import { Chip } from '@material-ui/core'
import ChipInput from 'material-ui-chip-input'


import FormControl from '@material-ui/core/FormControl'

/* Dev */
// import { green } from 'logger'

/*
    error: in redux-form, error is a text field. In mui it is a boolean
*/


class ChipInputComponent extends Component {

  state = {
    chips: []
  }

  handleAddChip = (chip) => {
    console.log(`chip: ${chip}`)
    this.setState((prevState) => {
      return { chips: [...prevState.chips, chip] }
    })
    console.log('chips: ', this.state.chips)
  }

  handleDeleteChip = (chip, index) => {
    console.log(`chip: ${chip}, index: ${index}`)
    const idx = this.state.chips.indexOf()
    if (this.idx !== -1) {
      this.state.chips.splice(idx, 1)
    }
  }

  render() {
    const { input, label, name, meta, ...custom } = this.props
    const { error, touched } = meta
    const { ...customRest } = custom
    const hasErrorSet = typeof error === 'undefined' ? false : true
    const isError = hasErrorSet && touched
    return (
      <ChipInput
        value={this.state.chips}
        error={isError}
        label={label}
        name={name}
        onAdd={(chip) => this.handleAddChip(chip)}
        onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
        fullWidth />
    )
  }
}

const ChipRedux = props => {
  const { fieldName, fieldLabel } = props

  return (
    <FormControl>
      <Field
        component={ChipInputComponent}
        label={fieldLabel}
        name={fieldName}
      />
    </FormControl>
  )
}

export default ChipRedux