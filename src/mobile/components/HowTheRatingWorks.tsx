import { Typography } from "@mui/material";

interface HowTheRatingWorksProps {
  size?: "small" | "large";
}
export const HowTheRatingWorks = ({ size = "small" }) => {
  return (
    <Typography
      variant={"h5"}
      style={{
        pointerEvents: "all",
        cursor: "pointer",
        fontFamily: "SuisseIntl-Thin",
        fontWeight: 600,
        display: "flex",
        fontSize: size === "small" ? 12 : 18,
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
      onClick={() => {
        const fileName = "Methodology_v05_AP_BK_v2.pdf";
        const link = document.createElement("a");
        link.href = `/pdf/${fileName}`;
        link.download = fileName;
        link.click();
      }}
    >
      How the rating works
      <img
        src={"/assets/questionGray.svg"}
        alt={"hint"}
        style={{ opacity: 0.6, height: "18px" }}
      />
    </Typography>
  );
};
