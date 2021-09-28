const candidatesEndPoint = "http://localhost:3333/api/candidates";

export const getCandidates = () => {
  const token = localStorage.getItem("accessToken");
  return fetch(candidatesEndPoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((results) => results.json())
    .then((candidates) => {
      return candidates;
    });
};

const reportsEndPoint = "http://localhost:3333/api/reports";

export const getReports = () => {
  const token = localStorage.getItem("accessToken");
  return fetch(reportsEndPoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((reports) => {
      return reports;
    });
};
