import { tss } from "tss-react/mui";

export const useCardStyles = tss.create({
  header: {
    position: "absolute",
    top: "5vh",
    left: "2vw",
    zIndex: 1,

    color: "#FFF",
    
    fontSize: "5vh",
    fontWeight: 300,
    lineHeight: "normal",
    letterSpacing: "-1.2",
  },
  headerCategory: {
    
    fontWeight: 500,
  },

  dictionaryListWrapper: {
    position: "absolute",
    top: 50,
    right: 65,
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },
  dictionaryContainer: {
    width: "25vw",
  },
  dictionaryList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  dictionaryTitle: {
    color: "#FFF",
    
    fontSize: "2vh",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2vh",
  },
  dictionaryCategoryColor: {
    color: "#2D67FF",
  },
  dictionaryDescription: {
    color: "#FFF",
    
    fontSize: "3vh",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "4vh",
  },
});
