import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import "./faq-toggle.styles.scss";

const data = [
  {
    header: "test1",
    body: "body1",
  },
  {
    header: "test2",
    body: "body2",
  },
  {
    header: "test3",
    body: "Hello, **world**!",
  },
];

const FaqToggle = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    if (selected === index) setSelected(null);
    else setSelected(index);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="faq-toggle">
            <div className="sliding-header-ft">
              <p>{item.header}</p>
              <p onClick={() => handleClick(index)}>^</p>
            </div>
            {selected === index && (
              <div className="sliding-content-ft">
                <ReactMarkdown>{item.body}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FaqToggle;
