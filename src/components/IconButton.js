import Button from "@mui/material/Button";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const styles = {
  buttonIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50px",
    width: "95%",
    borderRadius: "12px",
    backgroundColor: "rgb(0, 0, 0, 0.3)",
    marginBottom: "25px",
    flexShrink: "0",
  },
};

const IconButton = ({ left, right, onClick, children }) => {
  return (
    <Button onClick={onClick} style={styles.buttonIcon} variant="contained">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ArrowBackIosOutlinedIcon
          style={{ visibility: `${left ? "visible" : "hidden"}` }}
        />
        <div>{children}</div>
        <ArrowForwardIosOutlinedIcon
          style={{ visibility: `${right ? "visible" : "hidden"}` }}
        />
      </div>
    </Button>
  );
};

export default IconButton;
