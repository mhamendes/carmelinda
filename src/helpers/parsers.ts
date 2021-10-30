export const parseLineBreak = (data: string) => {
  if (data) return data.replace(/\n/g, '<br />');
  return data;
};
