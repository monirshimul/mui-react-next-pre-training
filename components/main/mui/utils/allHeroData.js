const MicroHeading = ({ heading }) => {
  const splitHead = heading.split(" ");
  //console.log("split", splitHead)
  return (
    <>
      <span
        style={{
          fontSize: "70px",
          color: "#E9572F",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        {splitHead[0]}
        <br />
        <span
          style={{
            fontSize: "70px",
            color: "#070a39",
            fontWeight: "bold",
            letterSpacing: "5px",
          }}
        >
          {splitHead[1]}
        </span>
      </span>
    </>
  );
};
const MicroContent = ({ content }) => {
  const splitContent = content.split(".");
  console.log("split", splitContent);
  return (
    <>
      {splitContent.map((v, i) => (
        <small
          style={{
            fontSize: "19px",
            color: "#070a3999",
            margin: "0px 0px 10px",
            padding: "10px 0px 0px",
            letterSpacing: "1px",
          }}
        >
          {`${v}.`}
          <br />
        </small>
      ))}
    </>
  );
};

const MicroImage = ({image}) => {
  return (
    <>
      <img
        src={`/${image}`}
        style={{
          margin: "auto",
          cursor: "pointer",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        }}
        
      />
    </>
  );
};

export const heroData = [
  {
    id: 1,
    heroName: "hero for page",
    heading: <MicroHeading heading={"Your Business"} />,
    background: "#fff4f2",
    content: (
      <MicroContent
        content={
          "There's no one way to design a website. It depends on your goal, audience, and what's on offer. The checklists below cover a number of pages that can be on a website, so take a look and use whatever's needed for your project"
        }
      />
    ),
    image:<MicroImage image={"one.jpg"}/>
  },
  {
    id: 1,
    heroName: "hero for page",
    heading: "Pages Checklists",
    background: "#fff4f2",
    content:
      "There's no one way to design a website. It depends on your goal, audience, and what's on offer. The checklists below cover a number of pages that can be on a website, so take a look and use whatever's needed for your project.",
  },
  {
    id: 1,
    heroName: "hero for page",
    heading: "Pages Checklists",
    background: "#fff4f2",
    content:
      "There's no one way to design a website. It depends on your goal, audience, and what's on offer. The checklists below cover a number of pages that can be on a website, so take a look and use whatever's needed for your project.",
  },
];
