const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// get all jobs
export const getJobsList = async () => {
  const res = await fetch(`${apiUrl}/search`);
  const data = await res.json();
  return data;
};

// get single job detail
export const getJobDetail = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}`);
  const data = await res.json();
  return data;
};

// sort jobs by most recent
export const getMostRecentJobs = async () => {
  const res = await fetch(`${apiUrl}/search`);
  const data = await res.json();

  return data;
};

// sort jobs by most relevant
export const getMostRelevantJobs = async () => {
  const res = await fetch(`${apiUrl}/search`);
  let data = await res.json();
  const filter = data.data.reverse();
  data = { ...data, data: filter };
  return data;
};
