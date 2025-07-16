import { useMainPageStyles } from "./styles";

export const Title = () => {
  const { classes } = useMainPageStyles();

  return (
    <div className={classes.title}>
      <div>
        <span
          style={{
            fontFamily: "SuisseIntl-Regular",
            fontWeight: 600,
          }}
        >
          Global Resilience Platform{" "}
        </span>
        is a data-driven <br />
        resilience diagnostic observatory for the
        <br /> Global South which provides
      </div>
    </div>
  );
};
