import React from "react";
import Welcome1 from "./02-welcome";
import Welcome2 from "./03-welcome2";
import Welcome3 from "./04-welcome3";

const Greetings = () => {
  return (
    <div>
      <Welcome1
        firstName="John"
        lastName="Doe"
        disabled
        desc="Ben bir Developerim"
      />
      <Welcome1 firstName="Tom" lastName="Odell" desc="Ben bir Developerim" />
      <Welcome2 firstName="Maria" lastName="Rodrigez" />
      <Welcome3 firstName="Tabitha" lastName="Collins" />
      <Welcome3 firstName="Tabitha" lastName="Collins" />
      <Welcome3 firstName="Tabitha" lastName="Collins" />
      <Welcome3 firstName="Tabitha" lastName="Collins" />
    </div>
  );
};

export default Greetings;
