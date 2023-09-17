import { create } from '@storybook/theming'

// @ts-ignore
import logo from './logo.png'

export default create({
  base: 'dark',
  brandTitle: 'DEUI storybook',
  brandUrl: '',
  brandImage: logo,
  brandTarget: '_blank'
})