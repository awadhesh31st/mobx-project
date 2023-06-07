import React from "react";

export interface LayOutComponentProps {
  children: React.ReactNode;
}

const LayOutComponent: React.FC<LayOutComponentProps> = ({ children }) => {
  return (
    <div className="p-0 m-0 block px-40">
      <div></div>
      <div className="w-full container mx-auto my-8">
        <div className="flex flex-wrap justify-start gap-4">{children}</div>
      </div>
      <div></div>
    </div>
  );
};

export interface LayOutComponentProps {
  children: React.ReactNode;
}

export default LayOutComponent;
