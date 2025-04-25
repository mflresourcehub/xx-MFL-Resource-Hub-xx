// 1. Get the <span> element where the last updated date will be displayed
const dateSpan = document.getElementById('last-updated');

// 2. Get the "last modified" date from the document
const lastModified = new Date(document.lastModified);

// 3. Format the date to something like "25 April 2025"
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-GB', options);

// 4. Insert the formatted date into the <span> element
dateSpan.textContent = formattedDate;
