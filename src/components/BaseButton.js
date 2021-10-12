import Button from "@mui/material/Button";

const styles = {
  button: {
    height: "50px",
    width: "95%",
    borderRadius: "12px",
    backgroundColor: "rgb(0, 0, 0, 0.3)",
    marginBottom: "25px",
    flexShrink: "0",
  },
};

const BaseButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} style={styles.button} variant="contained">
      {children}
    </Button>
  );
};

export default BaseButton;
