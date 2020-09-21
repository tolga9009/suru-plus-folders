import styled from 'styled-components'

export const Global = styled.div`
    font-family: 'Poppins', sans-serif;
    ${({ lang }) => lang === 'ar' && `
        font-family: 'Cairo', sans-serif;    
    `}
`
