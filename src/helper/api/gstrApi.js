import userAxios from '@/lib/userAxios';

export const getTrackGstReturn = async ({ gstin, financialYear }) => {
  const resp = await userAxios.post(`/gst/return/track`, {
    gstin,
    financialYear,
  });
  return resp.data.data;
};
