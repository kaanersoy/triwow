import React from 'react';
import './index.scss';

export default function Checkbox({ color, isTrue = undefined, ...props }) {
  return (
    <svg className="checkbox" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM5.8769 50C5.8769 74.3685 25.6315 94.1231 50 94.1231C74.3685 94.1231 94.1231 74.3685 94.1231 50C94.1231 25.6315 74.3685 5.8769 50 5.8769C25.6315 5.8769 5.8769 25.6315 5.8769 50Z"
        fill={color}
      />
      <path
        className={isTrue ? 'tick checked' : 'tick'}
        d="M26 48.3333L45.7463 70L75 31"
        stroke="black"
      />
      <path
        className={isTrue === false ? 'false active' : 'false'}
        d="M35 35L65 65M65 35L35 65"
        stroke="black"
      />
    </svg>
  );
}
