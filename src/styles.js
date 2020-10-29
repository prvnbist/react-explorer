import tw, { css, styled } from 'twin.macro'

export const Container = styled.div(
   ({ sidebar }) => css`
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-rows: 40px 1fr 40px;
      grid-template-columns: ${sidebar.open ? '340px' : '0'} 1fr;
      grid-template-areas: 'head head' 'aside main' 'footer footer';

      nav {
         grid-area: head;
      }
      aside {
         grid-area: aside;
         ${tw`border-t border-b border-gray-300`}
         display: ${sidebar.open ? 'block' : 'none'}
      }
      main {
         grid-area: main;
         ${tw`border-l border-t border-b border-gray-300`}
      }
      footer {
         grid-area: footer;
      }
   `
)
