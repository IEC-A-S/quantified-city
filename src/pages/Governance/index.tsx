import { MainMenu } from "../../components/MainMenu";
import { Header } from "../Marketplace/components/Header";
import { type FC, useState } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useGovernanceStyles = makeStyles()({
  toggleButton: {
    fontWeight: 400,
    fontSize: "3.5vh",
    color: "#000",
    background: "white",
    border: "1px solid #000",
    opacity: 0.2,
    borderRadius: "60px",
    padding: "0.7vh 2.5vh",
    textTransform: "none",
    transition: "none",
    textWrap: "nowrap",
    // "&:hover": {
    //   border: "none",
    //   opacity: 1,
    //   color: "#fff",
    //   background: "#2D67FF",
    // },
  },
});

export const persons = [
  {
    image: "/assets/governance/Renato.png",
    name: "Renato Galvão Flôres Junior",
    position:
      "Director, International Intelligence Unit of Fundação Getulio Vargas, PhD in Economics, Brazil",
    tags: "Financial engineering, statistical mathematics, economics",
  },
  {
    image: "/assets/governance/Branko.png",
    name: "Branko Milanoviс",
    position:
      "Professor, The City University of New York, PhD in Economics, USA",
    tags: "Income distribution, economic inequality, economic growth",
  },
  {
    image: "/assets/governance/Marie.png",
    name: "Marie Parramon Gurney",
    position:
      "Chief Transformative Impact Officer, Skultcha, LLD in Environmental Law, South Africa",
    tags: "Sustainability, policy development, environmental law, inclusion",
  },
  {
    image: "/assets/governance/Samir.png",
    name: "Samir Saran",
    position:
      "President of the Observer Research Foundation, PhD in Sustainability, India",
    tags: "Climate change and energy policy, technology and media, global governance",
  },
  {
    image: "/assets/governance/Tobin.png",
    name: "Tobin Im",
    position:
      "Head of Graduate School of Public Administration, Seoul National University, PhD in Sociology, South Korea",
    tags: "Public administration, performance management, transfromational leadership, bureaucracy, citizen compliance",
  },
];

export const Governance = () => {
  const { classes } = useGovernanceStyles();
  const [menuVisible, setMenuVisible] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "scientific" | "management" | "board"
  >("scientific");

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <Header invertColors={true} setMenuVisible={setMenuVisible} />
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 11vh)",
          overflowY: "scroll",
          padding: "2.5vh 10vh 0 10vh",
        }}
      >
        <div
          style={{
            
            fontWeight: 400,
            fontSize: "6.8vh",
          }}
        >
          Governance
        </div>
        <div
          style={{
            paddingTop: "2vh",
            display: "flex",
            flexDirection: "row",
            gap: "1vh",
          }}
        >
          <Button
            className={classes.toggleButton}
            style={{
              opacity: 1,
              background: activeTab === "scientific" ? "#2D67FF" : "white",
              color: activeTab === "scientific" ? "#fff" : "#000",
              border: activeTab === "scientific" ? "none" : "1px solid #000",
            }}
          >
            Scientific Board
          </Button>
          <Button className={classes.toggleButton}>Management</Button>
          <Button className={classes.toggleButton}>Board of Directors</Button>
        </div>
        <div
          style={{
            paddingTop: "4vh",
            paddingBottom: "4vh",
            display: "flex",
            flexDirection: "row",
            gap: "2vh",
          }}
        >
          <div
            style={{
              height: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 3,
            }}
          >
            {persons.map((person) => (
              <PersonCard
                img={person.image}
                name={person.name}
                position={person.position}
                tags={person.tags}
              />
            ))}
          </div>
          <div
            style={{
              flex: 2,
              fontWeight: 400,
              fontSize: "3vh",
            }}
          >
            Scientific board strategically oversees{" "}
            <span
              style={{
                
              }}
            >
              URI methodology and project assessment methodology
            </span>{" "}
            as well as outcomes of analysis. <br />
            <br />
            The Scientific Advisory Board ensures that our methodology aligns
            with{" "}
            <span
              style={{
                
                color: "#2D67FF",
              }}
            >
              high scientific standards
            </span>
            , is suitable for a wide range of cities and corporations worldwide,
            taking into account cultural nuances and economic capabilities of
            the countries they are in, and addresses all key environmental,
            social, and governmental challenges
          </div>
        </div>
      </div>
    </div>
  );
};

interface IPersonCard {
  img: string;
  name: string;
  position: string;
  tags: string;
}

export const PersonCard: FC<IPersonCard> = ({ img, name, position, tags }) => {
  return (
    <div
      style={{
        width: "19.5vh",
        height: "auto",
        borderRadius: "2vh",
        backgroundColor: "transparent",
        padding: "2vh",
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
      }}
    >
      <img
        src={img}
        alt={"person"}
        style={{
          width: "100%",
          height: "27vh",
          objectFit: "cover",
          borderRadius: "4vh",
        }}
      />
      <div
        style={{
          
          fontWeight: 400,
          fontSize: "1.5vh",
          color: "#000",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontWeight: "100",
          fontSize: "1.4vh",
          color: "rgb(0, 0, 0)",
        }}
      >
        {position}
      </div>
      <div
        style={{
          fontWeight: "100",
          fontSize: "1.4vh",
          color: "rgb(0, 0, 0)",
          opacity: 0.5,
        }}
      >
        {tags}
      </div>
    </div>
  );
};
