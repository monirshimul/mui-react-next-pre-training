const MicroIcon = ({icon}) => {
    return (
      <>
        <img
          src={`/${icon}`}
          style={{
            width: "35px",
            height: "30px",
            
          }}
          
        />
      </>
    );
  };




export const cardContentData = [
    {
        icon:<MicroIcon icon={"icon1.svg"}/>,
        text:"Login"
    },
    {
        icon:<MicroIcon icon={"icon2.svg"}/>,
        text:"Pricing"
    },
    {
        icon:<MicroIcon icon={"icon3.svg"}/>,
        text:"404"
    },
    {
        icon:<MicroIcon icon={"icon4.svg"}/>,
        text:"Contact"
    },
    {
        icon:<MicroIcon icon={"icon5.svg"}/>,
        text:"Sign up"
    },
    {
        icon:<MicroIcon icon={"icon6.gif"}/>,
        text:"FAQ"
    },
    {
        icon:<MicroIcon icon={"icon7.gif"}/>,
        text:"Blog Post"
    },
    {
        icon:<MicroIcon icon={"icon8.gif"}/>,
        text:"Careers"
    },
    {
        icon:<MicroIcon icon={"icon9.gif"}/>,
        text:"Team"
    },
    {
        icon:<MicroIcon icon={"icon10.gif"}/>,
        text:"Cart"
    },
    {
        icon:<MicroIcon icon={"icon11.gif"}/>,
        text:"Press"
    },
    {
        icon:<MicroIcon icon={"icon12.gif"}/>,
        text:"Search"
    },
    {
        icon:<MicroIcon icon={"icon13.gif"}/>,
        text:"Blog"
    }
]