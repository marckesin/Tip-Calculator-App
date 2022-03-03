import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const TipButton = styled(Button)({
  backgroundColor: "hsl(183, 100%, 15%)",
  color: "hsl(0, 0%, 100%)",
  fontWeight: "700",
  fontFamily: "Space Mono",
  fontSize: "1.2rem",
  border: "none",
  borderRadius: "4px",
  width: "100%",

  "&:hover": {
    backgroundColor: "hsl(185, 41%, 84%)",
    color: "hsl(183, 100%, 15%)",
  },
});

export default function GridButtons({ handleTip }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item md={4} sm={6}>
        <TipButton onClick={handleTip} value="5">
          5%
        </TipButton>
      </Grid>
      <Grid item md={4} sm={6}>
        <TipButton onClick={handleTip} value="10">
          10%
        </TipButton>
      </Grid>
      <Grid item md={4} sm={6}>
        <TipButton onClick={handleTip} value="15">
          15%
        </TipButton>
      </Grid>
      <Grid item md={4} sm={6}>
        <TipButton onClick={handleTip} value="25">
          25%
        </TipButton>
      </Grid>
      <Grid item md={4} sm={6}>
        <TipButton onClick={handleTip} value="50">
          50%
        </TipButton>
      </Grid>
      <Grid item md={4} sm={6}>
        <TipButton>Custom</TipButton>
      </Grid>
    </Grid>
  );
}
