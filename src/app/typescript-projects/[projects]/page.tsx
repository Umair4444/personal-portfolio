import React from "react";

const page = ({ params }: { params: { projects: string } }) => {
  return (
    <div>
      <div>{params.projects}</div>
    </div>
  );
};

export default page;
