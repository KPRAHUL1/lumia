import React from "react";

const StyledInput = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`border-b-2 border-gray-300 outline-none p-1 focus:border-gray-300 focus:ring-0 border-0 ${className}`}
    {...props}
  />
));
StyledInput.displayName = 'StyledInput';

export default StyledInput;
