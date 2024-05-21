import React, { useState, useEffect } from 'react';
import './team.css';

const TeamMember = ({ name, designation, profileImg, onChange, showChooseFile }) => {
  return (
    <div className="team-member">
      <div className="profile-img" style={{ backgroundImage: `url(${profileImg})` }}>
        {showChooseFile && (
          <label htmlFor="file-input">
            <input type="file" id="file-input" accept="image/*" onChange={onChange} className="file-input" />
            Choose File
          </label>
        )}
      </div>
      <div className="member-details">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const employeeNames = ['John', 'Alice', 'Bob', 'Emma', 'Mike']; // Add more names as needed

  const [teamMembers, setTeamMembers] = useState(() => {
    // Load team members from storage or use default values if storage is empty
    const storedMembers = JSON.parse(localStorage.getItem('teamMembers'));
    return storedMembers || employeeNames.map(name => ({
      name,
      designation: '',
      profileImg: '',
      imageUploaded: false,
    }));
  });

  useEffect(() => {
    // Save team members to storage whenever it changes
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleProfileImgChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setTeamMembers(prevMembers => {
          const updatedMembers = [...prevMembers];
          updatedMembers[index].profileImg = imageUrl;
          updatedMembers[index].imageUploaded = true;
          return updatedMembers;
        });
        alert('Image uploaded successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="team-container">
      <h2 className="h1">Team Members</h2>
      <div className="team-leader">
        <TeamMember
          name={teamMembers[0].name}
          designation={teamMembers[0].designation}
          profileImg={teamMembers[0].profileImg}
          onChange={(e) => handleProfileImgChange(e, 0)}
          showChooseFile={!teamMembers[0].imageUploaded}
        />
      </div>
      <div className="team-members">
        {teamMembers.slice(1).map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            designation={member.designation}
            profileImg={member.profileImg}
            onChange={(e) => handleProfileImgChange(e, index + 1)}
            showChooseFile={!member.imageUploaded}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
