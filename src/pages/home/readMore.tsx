import React, { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 120 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {text.length > maxLength && !isExpanded ? (
        <>
          <div className="whitespace-pre-line">{text.slice(0, maxLength)}...</div>
          <button
            className="text-blue-500 mt-2 focus:outline-none"
            onClick={toggleExpand}
          >
            Read More
          </button>
        </>
      ) : (
        <>
          <div className="whitespace-pre-line">{text}</div>
          {text.length > maxLength && (
            <button
              className="text-blue-500 mt-2 focus:outline-none"
              onClick={toggleExpand}
            >
              Show Less
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ReadMore;