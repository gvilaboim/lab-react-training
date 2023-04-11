import React, { useState } from 'react';
import profilesJson from '../data/berlin.json';

const Facebook = () => {
  const [profiles, setProfiles] = useState(profilesJson);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div>
        {Array.from(new Set(profiles.map((p) => p.country))).map(
          (country) => (
            <button
              key={country}
              onClick={() => handleCountryClick(country)}
              style={{
                backgroundColor:
                  selectedCountry === country ? 'blue' : 'white',
              }}
            >
              {country}
            </button>
          )
        )}
      </div>
      <div className="profiles">
        {profiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            style={{
              backgroundColor:
                selectedCountry === profile.country ? 'blue' : 'white',
            }}
          >
            <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
            <p>
              <b>First Name: </b> {profile.firstName}
            </p>
            <p>
              <b>Last Name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country: </b> {profile.country}
            </p>
            <p>
              <b>Type: </b> {profile.isStudent ? 'student' : 'teacher'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facebook;