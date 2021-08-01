import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileSideBar from '../src/components/ProfileSideBar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

export default function Home() {
  const pessoasFavoritas = ['rafaballerini', 'juunegreiros', 'peas', 'omariosouto', 'marcobrunodev']


  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <section>
        <ProfileSideBar gitHubUsers="Luis-Felipe-N" />
      </section>
      <section>
          <Box>
            <h1 className="title">Bem vindo!</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            O que você deseja
          </Box>
      </section>
      <section>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade {pessoasFavoritas.length}
          </h2>
          <ul>
            {
              pessoasFavoritas.map( pessoa => (
                <li>
                  <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} />
                    <span>{pessoa}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </ProfileRelationsBoxWrapper>
      </section>
    </MainGrid>
    </>
  )
}
