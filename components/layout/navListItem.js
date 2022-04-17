
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const iconSize = "18px";
const iconColor = "#009DAE";

export const navToPage = (text)=>{
    switch (text) {
        case "Grid & Container":
            return "/gridWithOthers"
        case "Paper & Stack":
            return "/paperWithOthers" 
        default:
            break;
    }
}

export const listItemForSideBar = [
    {
        text: "Grid & Container",
        icon: <InboxIcon sx={{fontSize:iconSize, color:iconColor}}/>,

    },
    {
        text: "Paper & Stack",
        icon: <MailIcon sx={{fontSize:iconSize, color:iconColor}}/>,
        
    }
]