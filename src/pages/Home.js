import IconButton from "../components/IconButton";
import Trello from "../trello/Trello";

const TITLE = "Alvin Sewram";
const CAPTION_ONE = "FULL STACK SOFTWARE ENGINEER";
const CAPTION_TWO = "UI / UX DESIGNER";

const Home = ({ setPage }) => {
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
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          color: "white",
          width: "75%",

          fontFamily: "'Spartan', sans-serif",
          fontSize: "30px",
          fontWeight: "600",

          marginBottom: "10px",
        }}
      >
        {TITLE}
      </div>
      <div
        style={{
          fontFamily: "'Spartan', sans-serif",
          fontSize: "10px",
          fontWeight: "700",
          color: "rgb(255, 255, 255, 0.4)",
          letterSpacing: "3px",
          marginBottom: "5px",
        }}
      >
        {CAPTION_ONE}
      </div>
      <div
        style={{
          fontFamily: "'Spartan', sans-serif",
          fontSize: "10px",
          fontWeight: "700",
          color: "rgb(255, 255, 255, 0.4)",
          letterSpacing: "3px",
          marginBottom: "30px",
        }}
      >
        {CAPTION_TWO}
      </div>
      <div
        style={{
          height: "360px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexShrink: "0",
        }}
      >
        <Trello list={"home"} />
        <IconButton
          right
          onClick={() => {
            setPage("projects");
          }}
        >
          Projects
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
