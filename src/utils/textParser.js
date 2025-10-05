import React from 'react';

export const renderTextWithLinks = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  // Pattern to match [text](url) format
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements = [];
  let lastPosition = 0;
  let matchFound;
  let elementKey = 0;

  while ((matchFound = pattern.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = matchFound;
    const matchStart = matchFound.index;
    
    // Add text before the link
    if (matchStart > lastPosition) {
      const beforeText = text.slice(lastPosition, matchStart);
      elements.push(beforeText);
    }
    
    // Add the clickable link
    elements.push(
      <a 
        key={`parsed-link-${elementKey++}`}
        href={linkUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: '#11ABB0', 
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
      >
        {linkText}
      </a>
    );
    
    lastPosition = matchStart + fullMatch.length;
  }
  
  // Add remaining text after last link
  if (lastPosition < text.length) {
    elements.push(text.slice(lastPosition));
  }
  
  return elements.length > 0 ? elements : text;
};

export const renderMultilineTextWithLinks = (text) => {
  if (!text) return text;
  
  const lines = text.split('\n');
  return lines.map((line, index) => {
    const isLastLine = index === lines.length - 1;
    return (
      <span key={`text-line-${index}`}>
        {renderTextWithLinks(line)}
        {!isLastLine && <br />}
      </span>
    );
  });
};