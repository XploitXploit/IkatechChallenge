import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface CustomTooltipProps {
  message: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ message, children }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id={`tooltip-${message}`}>
          {message}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default CustomTooltip;
