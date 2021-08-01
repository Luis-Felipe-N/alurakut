import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  padding: 0 5%;
  margin: auto;
  display: grid;
  grid-template-coluns: ;
  gap: 1rem;

  @media(min-width: 860px) {
    grid-template-areas: "perfil";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid