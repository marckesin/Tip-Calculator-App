import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "./input";

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

// Grid component for tip buttons
export default function GridButtons({ handleTip, value }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={6} md={4}>
        <TipButton onClick={handleTip} name="tip" value="5">
          5%
        </TipButton>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton onClick={handleTip} name="tip" value="10">
          10%
        </TipButton>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton onClick={handleTip} name="tip" value="15">
          15%
        </TipButton>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton onClick={handleTip} name="tip" value="25">
          25%
        </TipButton>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton onClick={handleTip} name="tip" value="50">
          50%
        </TipButton>
      </Grid>
      <Grid item xs={6} md={4}>
        <Input
          name="tip"
          // value={value}
          onChange={handleTip}
          min={0}
          step={".01"}
          placeholder={"Custom"}
        />
      </Grid>
    </Grid>
  );
}
