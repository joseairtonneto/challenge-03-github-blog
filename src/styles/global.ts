import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.blue};
  }

  body {
    background: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem/1.6 'Nunito', sans-serif;
  }

  input {
    width: 100%;
    height: 3.125rem;

    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    padding: 1rem 0.75rem;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
