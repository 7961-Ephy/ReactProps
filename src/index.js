import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatarImg" src="avatar.jpg" alt="Avatar"></img>
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h3>Ephy Kamau</h3>
      <p>
        Fullstack web developer and currently an IT degree student at JKUAT.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML + CSS" color="orangered" />
      <Skill skillName="Javascript" color="green" />
      <Skill skillName="React" color="blue" />
      <Skill skillName="Python" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.skillName}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
