import React, { useState } from 'react';

import { IconChevronDown } from '@tabler/icons';
import ReactMarkdown from 'react-markdown';

import './faq-toggle.styles.scss';

const FaqToggle = ({ faq, index }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => setSelected((prevSelected) => !prevSelected);

  const getHeight = () => {
    var element = document.getElementsByClassName('sliding-content-ft');
    return element[index].scrollHeight;
  };

  return (
    <div className="faq-toggle">
      <div className="sliding-header-ft" onClick={handleClick}>
        <p>{faq.question}</p>
        <IconChevronDown
          size={12}
          className={`icon-faq ${selected ? 'icon-faq__active' : ''}`}
        />
      </div>
      <div
        className="sliding-content-ft"
        style={{
          maxHeight: `${selected ? getHeight() + 'px' : 0}`,
        }}
      >
        <div style={{ paddingTop: '20px' }}>
          <ReactMarkdown>{faq.answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default FaqToggle;
