import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject() {
  const subject = useContext(SubjectContext);

  return (
    <div style={{ backgroundColor: "lightgreen", padding: 10 }}>
      <h2>Subject Component</h2>
      <h3>Selected Subject: {subject || "None"}</h3>
    </div>
  );
}
