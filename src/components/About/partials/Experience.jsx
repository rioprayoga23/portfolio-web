import React from "react";

const Experience = ({ year, role, company }) => {
  return (
    <section className="flex gap-5 mb-3">
      <h3 className="font-bold">{year}</h3>
      <div>
        <h3 className="font-bold">{role}</h3>
        <p>{company}</p>
      </div>
    </section>
  );
};

export default Experience;
