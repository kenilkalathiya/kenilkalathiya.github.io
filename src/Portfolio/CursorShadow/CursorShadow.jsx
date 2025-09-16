import React, { useState, useEffect, useRef } from 'react';
import './CursorShadow.css';

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null); // Create a ref to access the DOM element

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleFirstMouseMove = () => {
      // When the mouse first moves, add the 'visible' class to the element
      if (cursorRef.current) {
        cursorRef.current.classList.add('visible');
      }
      // Now start listening for all subsequent mouse movements
      window.addEventListener('mousemove', updatePosition);
      // Remove the initial listener so it only runs once
      window.removeEventListener('mousemove', handleFirstMouseMove);
    };

    // Set up the initial listener for the very first mouse move
    window.addEventListener('mousemove', handleFirstMouseMove);

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', handleFirstMouseMove);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <div
      ref={cursorRef} // Attach the ref to the div
      className="cursor-shadow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorShadow;