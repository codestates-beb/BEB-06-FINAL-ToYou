import { useRef } from "react";
import './Accordion.css'

const AccordionItem = ({ data, active, onToggle }) => {
  const { question, answer } = data;

  const contentEl = useRef();

  return (
    <div className={`accordion_item ${active ? "accordion_active" : ""}`}>
      <button className="accordion_button" onClick={onToggle}>
        {question}
        <span className="accordion_control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="accordion_answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="accordion_answer">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
