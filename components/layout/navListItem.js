
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';


const iconSize = "18px";
const iconColor = "#FF4C29";

export const navToPage = (text)=>{
    switch (text) {
        case "Grid & Container":
            return "/gridWithOthers"
        case "Paper & Stack":
            return "/paperWithOthers" 
        case "Card & Accordion":
            return "/" 
        default:
            break;
    }
}

export const listItemForSideBar = [
    {
        text: "Grid & Container",
        icon: <AlarmAddIcon sx={{fontSize:iconSize, color:iconColor}}/>,

    },
    {
        text: "Paper & Stack",
        icon: <AssignmentTwoToneIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Card & Accordion",
        icon: <CreditScoreIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Grid & Container",
        icon: <AlarmAddIcon sx={{fontSize:iconSize, color:iconColor}}/>,

    },
    {
        text: "Paper & Stack",
        icon: <AssignmentTwoToneIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Card & Accordion",
        icon: <CreditScoreIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Grid & Container",
        icon: <AlarmAddIcon sx={{fontSize:iconSize, color:iconColor}}/>,

    },
    {
        text: "Paper & Stack",
        icon: <AssignmentTwoToneIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Card & Accordion",
        icon: <CreditScoreIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Grid & Container",
        icon: <AlarmAddIcon sx={{fontSize:iconSize, color:iconColor}}/>,

    },
    {
        text: "Paper & Stack",
        icon: <AssignmentTwoToneIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    },
    {
        text: "Card & Accordion",
        icon: <CreditScoreIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    }
]