import * as React from 'react'
import ReactDOM from 'react-dom'
import { getQueriesForElement } from '@testing-library/react'
import { FavoriteNumber } from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  const { getByLabelText } = getQueriesForElement(div)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
