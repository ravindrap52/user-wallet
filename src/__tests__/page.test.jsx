import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a home page', () => {
    const { container } = render(<Home />)
     expect(container).toMatchSnapshot()
  })
})