function generateSummary() {
  const totalRuns = parseInt(document.getElementById('totalRuns').value);
  const locationRuns = parseInt(document.getElementById('locationRuns').value);
  let locationName = document.getElementById('locationName').value.trim();
  const overallPlace = parseInt(document.getElementById('overallPlace').value);
  const totalRunners = parseInt(document.getElementById('totalRunners').value);
  const gender = document.getElementById('gender').value;
  const genderPlace = parseInt(document.getElementById('genderPlace').value);
  const agePlace = parseInt(document.getElementById('agePlace').value);

  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');

  // Clear previous output
  output.innerText = '';
  output.style.display = 'none';
  copyBtn.style.display = 'none';

  // Error: locationRuns entered but no locationName
  if (!isNaN(locationRuns) && locationName === '') {
    output.innerText = 'Please enter a location name.';
    output.style.display = 'block';
    return;
  }

  // Error: overallPlace entered but no totalRunners
  if (!isNaN(overallPlace) && isNaN(totalRunners)) {
    output.innerText = 'Please enter the total number of parkrunners.';
    output.style.display = 'block';
    return;
  }

  // Capitalize location name if present
  if (locationName) {
    locationName = locationName
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Build summary lines
  const lines = [];

  if (!isNaN(totalRuns)) {
    lines.push(`- ${ordinal(totalRuns)} parkrun (lifetime)`);
  }

  if (!isNaN(locationRuns) && locationName) {
    lines.push(`- ${ordinal(locationRuns)} parkrun at ${locationName}`);
  }

  if (!isNaN(overallPlace) && !isNaN(totalRunners)) {
    lines.push(`- ${ordinal(overallPlace)} place out of ${totalRunners} parkrunners`);
  }

  if (gender && !isNaN(genderPlace)) {
    lines.push(
      gender === 'other'
        ? `- ${ordinal(genderPlace)} in my gender`
        : `- ${ordinal(genderPlace)} ${gender}`
    );
  }

  if (!isNaN(agePlace)) {
    lines.push(`- ${ordinal(agePlace)} in my age category`);
  }

  // Final check
  if (lines.length === 0) {
    output.innerText = 'Please enter one or more numerical values.';
    output.style.display = 'block';
    return;
  }

  // Show output
  output.innerText = lines.join('\n');
  output.style.display = 'block';
  copyBtn.style.display = 'inline-block';
}

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}


function toggleGenderPlace() {
  const gender = document.getElementById('gender').value;
  const wrapper = document.getElementById('genderPlaceWrapper');
  wrapper.style.display = gender ? 'block' : 'none';
}
