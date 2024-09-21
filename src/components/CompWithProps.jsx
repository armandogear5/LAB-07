import React, { useState } from 'react';

const CompWithProps = ({ displayTag: DisplayTag }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
      />
      <DisplayTag>User: {text}</DisplayTag>
    </div>
  );
};

export default CompWithProps;

