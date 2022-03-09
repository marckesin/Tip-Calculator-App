import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "./input";
import { styled } from "@mui/material/styles";

// Grid component for tip buttons
export default function GridButtons({ color, onClick, value }) {
  const TipButton1 = styled(Button)({
    backgroundColor: color[5],
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

  const TipButton2 = styled(Button)({
    backgroundColor: color[10],
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

  const TipButton3 = styled(Button)({
    backgroundColor: color[15],
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

  const TipButton4 = styled(Button)({
    backgroundColor: color[25],
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

  const TipButton5 = styled(Button)({
    backgroundColor: color[50],
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
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={6} md={4}>
        <TipButton1 onClick={onClick} name="tip" value="5">
          5%
        </TipButton1>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton2 onClick={onClick} name="tip" value="10">
          10%
        </TipButton2>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton3 onClick={onClick} name="tip" value="15">
          15%
        </TipButton3>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton4 onClick={onClick} name="tip" value="25">
          25%
        </TipButton4>
      </Grid>
      <Grid item xs={6} md={4}>
        <TipButton5 onClick={onClick} name="tip" value="50">
          50%
        </TipButton5>
      </Grid>
      <Grid item xs={6} md={4}>
        <Input
          name="custom"
          id="custom"
          value={value}
          onChange={onClick}
          min={0}
          step={".01"}
          placeholder={"Custom"}
        />
      </Grid>
    </Grid>
  );
}
