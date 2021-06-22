import React, { FC } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../components'

// render app with all providers
// basically just our theme provider here
const AppProviders: FC = ({ children }) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>
}

/* 
    replace the default render function with a custom one that has the application theming
*/

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions<any, any>
) => render(ui, { wrapper: AppProviders, ...options })

// reexport everything from @testing-library/react
export * from '@testing-library/react'

// reexport as render variable
export { customRender as render }
