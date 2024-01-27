import React from 'react';
import MemberForm from '../../components/forms/MemberForm';

export default function AddMember() {
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
      <MemberForm />
    </div>
  );
}
