import React from 'react'
import Common from "../components/layout/common";
import MuiContainer from '../components/main/mui/container'
import {MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour} from '../components/main/mui/myStyle'
import LeftContainer from "../components/main/mui/leftContainer";
import RightContainer from "../components/main/mui/rightContainer";
import ContainerLayout from "../components/layout/containerLayout";


const GridWithOthers = () => {
  return (
    <Common>
      {/* <TemporaryDrawer/> */}
      {/* First Way */}
      {/* <MuiGrid customStyle={{MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour}} /> */}
      {/* Second Way */}
      <ContainerLayout 
        first={<LeftContainer customStyle={{MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour}} />}
        second={<RightContainer customStyle={{MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour}}/>} />
      {/* <Divider /> */}
      <MuiContainer/>
      
    </Common>
  );
}

export default GridWithOthers