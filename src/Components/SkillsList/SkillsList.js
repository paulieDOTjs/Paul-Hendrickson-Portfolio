import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./SkillsList.scss";

function SkillsList({ skills, filters, setFilters, redirect, setRedirect }) {
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
  }, [redirect, setRedirect]);

  return (
    <>
      {redirect ? (
        <Redirect to={"/projects?" + filters.join("&")} />
      ) : (
        <ul className="SkillsList">
          {skills.map((skill) =>
            !filters.includes(skill) ? (
              <li key={skill + "li"}>
                <button
                  url="/projects"
                  onClick={() => addSkill(skill)}
                  key={skill + "but"}
                >
                  {skill}
                </button>
              </li>
            ) : (
              <li className="Active" key={skill + "li"}>
                <button
                  url={"/projects"}
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
