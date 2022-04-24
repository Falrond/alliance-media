import React, { useState, useCallback } from "react";
import Slick from "react-slick";

export const PreventingSlider = ({ children, ...props }) => {
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    console.log("handleBeforeChange");
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    console.log("handleAfterChange");
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (e) => {
      console.log("handleOnItemClick");
      if (dragging) e.stopPropagation();
    },
    [dragging]
  );

  return (
    <Slick
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <div onClickCapture={handleOnItemClick}>{child}</div>
      ))}
    </Slick>
  );
};
