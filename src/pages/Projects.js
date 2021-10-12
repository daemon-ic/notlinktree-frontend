import BaseButton from "../components/BaseButton";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Button from "@mui/material/Button";
import Trello from "../trello/Trello";

const Projects = ({ setPage }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center ",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Button
          onClick={() => {
            setPage("home");
          }}
          style={{ color: "white", marginLeft: "3vw" }}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
      </div>

      <div
        style={{
          height: "500px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "scroll",
          flexShrink: "0",
        }}
      >
        <Trello list={"projects"} />
      </div>
    </div>
  );
};

export default Projects;