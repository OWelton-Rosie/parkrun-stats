function generateSummary() {
  const totalRuns = parseInt(document.getElementById('totalRuns').value);
  const locationRuns = parseInt(document.getElementById('locationRuns').value);
  let locationName = document.getElementById('locationName').value.trim();
  const overallPlace = parseInt(document.getElementById('overallPlace').value);
  const totalRunners = parseInt(document.getElementById('totalRunners').value);
  const gender = document.getElementById('gender').value;
  const genderPlace = parseInt(document.getElementById('genderPlace').value);
  const agePlace = parseInt(document.getElementById('agePlace').value);

  // Capitalize first letter of each word in locationName
  if (locationName) {
    locationName = locationName
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }

  let lines = [];

  if (!isNaN(totalRuns)) {
    lines.push(`- ${ordinal(totalRuns)} parkrun`);
  }

  if (!isNaN(locationRuns) && locationName !== "") {
    lines.push(`- ${ordinal(locationRuns)} parkrun at ${locationName}`);
  }

  if (!isNaN(overallPlace) && !isNaN(totalRunners)) {
    lines.push(`- ${ordinal(overallPlace)} place out of ${totalRunners} parkrunners`);
  }

  if (gender && !isNaN(genderPlace)) {
    lines.push(`- ${ordinal(genderPlace)} ${gender}`);
  }

  if (!isNaN(agePlace)) {
    lines.push(`- ${ordinal(agePlace)} in my age category`);
  }

  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');

  const allEmpty = isNaN(totalRuns) &&
                   (isNaN(locationRuns) || locationName === "") &&
                   (isNaN(overallPlace) || isNaN(totalRunners)) &&
                   (gender === "" || isNaN(genderPlace)) &&
                   isNaN(agePlace);

  if (allEmpty) {
    output.innerText = 'You must enter one or more numerical values.';
    output.style.display = 'block';
    copyBtn.style.display = 'none';
    return;
  }

  if (lines.length > 0) {
    output.innerText = lines.join('\n');
    output.style.display = 'block';
    copyBtn.style.display = 'inline-block';
  } else {
    output.innerText = 'Please fill in at least one stat.';
    output.style.display = 'block';
    copyBtn.style.display = 'none';
  }
}
