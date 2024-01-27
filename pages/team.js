import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard';

function Team() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const reloadMembers = () => {
    getMembers(user.uid).then((data) => {
      setMembers(data);
    });
  };

  useEffect(() => {
    reloadMembers();
  }, []);

  return (
    <div
      className="text-center my-4"

    >
      <h1>~ The Moving Castle Crew ~
      </h1>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <MemberCard key={member.name} memberObj={member} onUpdate={reloadMembers} />
        ))}
      </div>
    </div>
  );
}

export default Team;
