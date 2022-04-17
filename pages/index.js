import Common from "../components/layout/common";
import { Container, Grid, Paper, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiContainer from '../components/main/mui/container'
import {MyCardOne, MyCardTwo, MyCardThree, MyCardFour} from '../components/main/mui/myStyle'
import LeftContainer from "../components/main/mui/leftContainer";
import RightContainer from "../components/main/mui/rightContainer";
import ContainerLayout from "../components/layout/containerLayout";
import TemporaryDrawer from "../components/layout/leftDrawer";
import MuiGrid from '../components/main/mui/grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function Home() {

  return (
    <Common>


      <MuiGrid customStyle={{MyCardOne, MyCardTwo, MyCardThree, MyCardFour}} />


      
    </Common>
  );
}
