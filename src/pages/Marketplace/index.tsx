import { Header } from "./components/Header";
import { useMarketplaceStyles } from "./components/styles";
import { Button, Slide } from "@mui/material";
import { IProject, ProjectItem } from "./components/ProjectItem";
import { PROJECTS_INFO } from "./data";
import { useEffect, useState } from "react";
import { MainMenu } from "../../components/MainMenu";
import { Filters } from "./components/Filters";

export const Marketplace = () => {
  const { classes } = useMarketplaceStyles();

  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(
    PROJECTS_INFO.sort((a, b) => {
      if (a.id == 8 || a.id == 15) {
        return -1;
      }
      if (b.id == 8 || b.id == 15) {
        return 1;
      }
      return 0;
    })
  );

  const [likedProjects, setLikedProjects] = useState<IProject[]>([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const projects = localStorage.getItem("grp:likedProjects");
    if (projects) {
      setLikedProjects(JSON.parse(projects));
    }
  }, []);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <Header invertColors={true} setMenuVisible={setMenuVisible} />
      <img
        src={"/assets/projectsOnMapBtn.svg"}
        alt={"projectsOnMapBtn"}
        className={classes.projectsOnMapBtn}
      />
      <Slide
        direction="up"
        in={likedProjects.length > 0}
        mountOnEnter
        unmountOnExit
      >
        <div
          style={{
            position: "absolute",
            left: "10vh",
            bottom: "4vh",
            backgroundColor: "#000",
            color: "#fff",
            zIndex: 1,
            borderTopRightRadius: "2vh",
            borderTopLeftRadius: "2vh",
            borderBottomRightRadius: "4vh",
            borderBottomLeftRadius: "4vh",
            padding: "2vh",
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1vh",
            }}
          >
            <img
              src={"/assets/likeIconFill.svg"}
              alt={"likeIcon"}
              style={{
                width: "2.5vh",
                height: "2.5vh",
              }}
            />
            <div
              style={{
                fontFamily: "SuisseIntl-Regular",
                fontWeight: 100,
                fontSize: "1.8vh",
              }}
            >
              {likedProjects.length + " "} projects added
            </div>
          </div>
          <Button
            className={classes.likeBtn}
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8vh",
            }}
          >
            Check your Portfolio{" "}
          </Button>
        </div>
      </Slide>
      <div className={classes.contentWrapper}>
        <div className={classes.title}>
          Project <span className={classes.titleBold}>marketplace</span>
        </div>
        <div className={classes.filtersAndProjectsWrapper}>
          <div className={classes.filtersWrapper}>
            <Button className={classes.addProjectBtn}>
              <img src="/assets/plusIconWhite.svg" alt="plus" />
              Add project
            </Button>
            <Filters setFilteredProjects={setFilteredProjects} />
          </div>
          <div className={classes.projectsWrapper}>
            {filteredProjects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                isLiked={likedProjects.some(
                  (likedProject) => likedProject.id === project.id
                )}
                setLikedProjects={setLikedProjects}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
