// import { useAuth } from '../utils/context/authContext';

import Team from './team';

function Home() {
  // const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>~ The Moving Castle Crew ~
      </h1>
      <Team />
    </div>
  );
}

export default Home;
