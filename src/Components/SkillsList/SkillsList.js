import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./SkillsList.scss";

function SkillsList({ skills, filters, setFilters }) {
  const [redirect, setRedirect] = useState(false);

  const addSkill = (skill) => {
    setFilters([...filters, skill]);
    setRedirect(true);
  };
  const removeSkill = (skill) => {
    setFilters(filters.filter((filt) => filt !== skill));
    setRedirect(true);
  };

  useEffect(() => {
    setRedirect(false);
  }, [redirect]);

  return (
    <>
      {redirect ? (
        <Redirect to={"/portfolio?" + filters.join("&")} />
      ) : (
        <ul className="SkillsList">
          {skills.map((skill) =>
            !filters.includes(skill) ? (
              <li key={skill + "li"}>
                <button
                  url="/portfolio"
                  onClick={() => addSkill(skill)}
                  key={skill + "but"}
                >
                  {skill}
                </button>
              </li>
            ) : (
              <li className="Active" key={skill + "li"}>
                <button
                  url={"/portfolio"}
                  onClick={() => removeSkill(skill)}
                  key={skill + "but"}
                >
                  {skill}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}

export default SkillsList;
