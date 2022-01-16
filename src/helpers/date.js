function getDateText(dateString) {
  if (!dateString) {return null}

  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const dateText = new Date(dateString).toLocaleDateString("en-US", options);
  return dateText;
}

export default getDateText;
