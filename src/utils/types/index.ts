import { ThemeProps } from '../../components/theme'

export type Shape = 'round' | 'curve' | 'square'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvocadoThemeProps {
  theme?: ThemeProps
}
