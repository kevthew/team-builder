import React from "react";

const TeamMember = props => {
    console.log ("this is props", props)
  return (
    <div className="member-list">
      {props.teamMember.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;