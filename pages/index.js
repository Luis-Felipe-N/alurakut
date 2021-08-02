import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileSideBar from '../src/components/ProfileSideBar';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { useState } from 'react';

export default function Home() {
  const [ communities, setCommunities ] = useState([])
  const pessoasFavoritas = ['rafaballerini', 'juunegreiros', 'peas', 'omariosouto', 'marcobrunodev']


  const handleCreateCommunity = (e) => {
    e.preventDefault()
    const dataForm = new FormData(e.target)
    const paserdCommunity = {
      name: dataForm.get('title'),
      image: dataForm.get('image')
    }
    setCommunities([...communities, paserdCommunity])
    console.log(dataForm.get('image'))
  }

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <section className="profileArea">
        <Box>
          <ProfileSideBar gitHubUsers="Luis-Felipe-N" />
          <AlurakutProfileSidebarMenuDefault />
        </Box>
      </section>
      <section>
          <Box>
            <h1 className="title">Bem vindo!</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="smallTitle">O que você deseja</h2>

            <form onSubmit={handleCreateCommunity}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da comunidade?"
                  aria-label="Qual vai ser o nome da comunidade?"
                  name="title"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Coloque uma URL para usar de capa"
                  aria-label="Coloque uma URL para usar de capa"
                  name="image"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
            
          </Box>
      </section>
      <section>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {
              pessoasFavoritas.map( pessoa => (
                <li  key={pessoa}>
                  <a href={`/users/${pessoa}`}>
                    <img src={`https://github.com/${pessoa}.png`} />
                    <span>{pessoa}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({communities.length})
          </h2>
          <ul>
            {
              communities.map( community => (
                <li  key={community.name}>
                  <a href={`/communiy/${community.name}`}>
                    <img src={community.image} />
                    <span>{community.name}</span>
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
