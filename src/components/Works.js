import { Text, Stack, Image, Button } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import AboutMe from '../assets/images/aboutme.jpg';
import WorkCard from './WorkCard';
import GitHubIcon from '@mui/icons-material/GitHub';
import BillabongSVG from '../assets/images/billabong.svg'
import BarberiaSVG from '../assets/images/barberia.svg'
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg'
import './Works.css'
// import MouseIcon from '@mui/icons-material/Mouse';
const Works = props => {
  return (
    <Stack my = {20}>
      <Stack
        textAlign={'center'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        my={20}
      >
        <Text fontSize={['20px', '20px', '30px']}>Más de 1 año de</Text>
        <TitleRemarcado contenido="EXPERIENCIA"></TitleRemarcado>
      </Stack>
      <Stack direction = {["column", "row", "row"]} alignItems={"center"} justifyContent={"center"} spacing={6}>
        <WorkCard image={BillabongSVG} link = {"https://billabong.com"}></WorkCard>
        <WorkCard image={LaBarbDeTotoSVG} link = {"https://labarberiadetoto.web.app"}></WorkCard>
        <WorkCard image={BarberiaSVG} link = {"https://benescuela.web.app"}></WorkCard>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"} pt={10}>
          <Button colorScheme={"orange"} borderRadius={"20px 20px"} variant = {"outline"} id = 'btn-github-seemore'> <GitHubIcon/> Mirá más en mi Github </Button>
      </Stack>
    </Stack>
  );
};

export default Works;
