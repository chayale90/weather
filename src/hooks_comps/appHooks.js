import React from 'react'
import AppDate from './appDate'
import Counter from './counter'
import SelectComp from './selectComp'
import Toggle from './toggle'

export default function AppHooks() {
  return (
    <React.Fragment>
      <SelectComp />
      <hr/>
      <AppDate />
      <hr/>
      <Toggle />
      <hr/>
      <Counter />
    </React.Fragment>
  )
}
