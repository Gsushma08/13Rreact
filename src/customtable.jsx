import React from 'react';

const CustomTable = () => {
  const iplMatches = [
    {
      matchNo: 1,
      date: "01-04-2024",
      time: "19:30 IST",
      teams: {
          name: "SRH Vs CSK",
          photoURL: "https://img.jagranjosh.com/images/2024/April/542024/srh-head-to.webp"
      },
      venue: "Hyderabad",
      id: 1
    },
    {
      matchNo: 2,
      date: "02-04-2024",
      time: "19:30 IST",
      teams: {
          name: "RCB Vs MI",
          photoURL: "https://staging.cricadium.com/wp-content/uploads/2019/03/MATCH-DETAILS-RCB-vs-MI-1-696x398.webp"
        },
      venue: "Bangalore",
      id: 2
    },
    {
      matchNo: 3,
      date: "03-04-2024",
      time: "19:30 IST",
      teams: {
          name: "GT Vs KKR",
          photoURL: "https://badisoch.in/wp-content/uploads/2023/04/GT-VS-KKR-LIVE-Streaming.jpg"
        },
      venue: "Ahmedabad",
      id: 3
    },
    {
      matchNo: 4,
      date: "04-04-2024",
      time: "19:30 IST",
      teams: {
          name: "DC Vs RR",
          photoURL: "https://img.jagranjosh.com/images/2024/March/2832024/DC-vs-RR.webp"
        },
      venue: "Delhi",
      id: 4
    },
    {
      matchNo: 5,
      date: "05-04-2024",
      time: "19:30 IST",
      teams: {
        name: "PBKS Vs LSG",
        photoURL: "https://cricreads.com/wp-content/uploads/2023/04/LSG-vs-PBKS-21st-Match-IPL-2023-Squad-Timings-2.jpg"
      },
      venue: "Ahmedabad",
      id: 5
    },
  ];

  return (
    <div>
      <h1>IPL 2024 Schedule</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Match No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Teams</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {iplMatches.map((match) => (
            <tr key={match.id}>
              <td>{match.matchNo}</td>
              <td>{match.date}</td>
              <td>{match.time}</td>
              <td>
                <img src={match.teams.photoURL} alt={match.teams.name} style={{ width: '100px', height: '100px' }} /> 
                <span>{match.teams.name}</span>
              </td>
              <td>{match.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

