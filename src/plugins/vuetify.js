/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VBtn } from 'vuetify/components/VBtn'

// dark mode custom
const darkTheme = {
  dark: true,
  colors : {
    background: '#221f1f',
    primary: '#1a1818',
    secondary: '#a89377',
    surface:'#d5d4d4',
    'on-surface' :'#e5e4e4',
    'secondary-darken-1' :'#838282',
  },
  variables: {
    'border-color': '#838282',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
}
// light mode custom
const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F2F2F2',
    'on-surface' :'#2b2b2b',
    primary: '#1a1818',
    'primary-darken-1': '#d5c09a',
    secondary: '#a89377',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'grey-1': '#3b3b3b',
    'grey-2': '#7b7b7b',
    'grey-3': '#9E9E9E',
    'grey-4': '#bdbebe',
    'grey-5': '#E0E0E0',
    'grey-6': '#f2f2f2',
    'grey-7': '#fafafa',
  },
  variables: {
    'border-color': '#7b7b7b',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
}


// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
  aliases: {
    VBtnPrimary: VBtn,
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn,
  },
  defaults: {
    VBtnPrimary: {
      color: 'secondary',
      variant: 'flat',
      style: ['height: 40px', 'padding: 0 1rem'],
      class: ['outlined'],
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat',
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain',
      style: ['padding: 0px', 'min-width: auto'],
    },
  },
})

export const btnPrimary = {
  color: 'primary',
  variant: 'flat',
}
