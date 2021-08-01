import Box from '../Box';

export default function ProfileSideBar( { gitHubUsers } ) {
    return (
        <Box>
            <img src={`https://github.com/${gitHubUsers}.png`} alt="Imagem de perfil" />
        </Box>
    )
}