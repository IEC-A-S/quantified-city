import { MainMenu } from "../../../components/MainMenu";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Button, Typography } from "@mui/material";
import { persons } from "../../../pages/Governance";

export const Governance = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} isMobile={true} />}
      <div
        style={{
          height: "fit-content",
          position: "sticky",
          padding: "16px",
          top: "0",
          zIndex: 10,
          filter: "invert(1)",
        }}
      >
        <Header
          setMenuVisible={setMenuVisible}
          isInverted={false}
          isUserLoggedIn={true}
        />
      </div>
      <div
        style={{
          padding: "16px",
          paddingTop: "0",
          height: "calc(100vh - 13vh)",
          overflowY: "scroll",
        }}
      >
        <Typography
          variant={"h1"}
          style={{
            color: "#000",
          }}
        >
          Governance
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "16px",
            gap: "16px",
            rowGap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            style={{
              textWrap: "nowrap",
            }}
          >
            Scientific board
          </Button>
          <Button
            variant="text"
            style={{
              border: "1px solid #000",
              opacity: 0.2,
            }}
          >
            Management
          </Button>
          <Button
            variant="text"
            style={{
              border: "1px solid #000",
              opacity: 0.2,
            }}
          >
            Board of Directors
          </Button>
        </div>
        <Typography
          variant={"h4"}
          style={{
            paddingTop: "16px",
            color: "#000",
          }}
        >
          Scientific board strategically oversees{" "}
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
            }}
          >
            URI methodology and project assessment methodology
          </span>{" "}
          as well as outcomes of analysis.
          <br />
          <br />
          The Scientific Advisory Board ensures that our methodology aligns
          with&nbsp;
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
              color: "#2D67FF",
            }}
          >
            high scientific standards
          </span>
          , is suitable for a wide range of cities and corporations worldwide,
          taking into account cultural nuances and economic capabilities of the
          countries they are in, and addresses all key environmental, social,
          and governmental challenges
        </Typography>
        <div
          style={{
            paddingTop: "16px",
            paddingBottom: "64px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {persons.map((person) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <img
                src={person.image}
                style={{
                  alignSelf: "center",
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant={"h4"}
                style={{
                  color: "#000",
                }}
              >
                {person.name}
              </Typography>
              <Typography
                variant={"h5"}
                style={{
                  color: "#000",
                }}
              >
                {person.position}
              </Typography>
              <Typography
                variant={"h4"}
                style={{
                  color: "#000",
                  opacity: 0.5,
                }}
              >
                {person.tags}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
