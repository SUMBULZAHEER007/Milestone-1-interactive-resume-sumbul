document.addEventListener('DOMContentLoaded', function () {
    // Get the Show/Hide button and skills list
    const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
    const skillsList = document.getElementById('skills-list');
    const generateButton = document.getElementById('generateButton');
    const resumeOutput = document.getElementById('resume-output');

    // Ensure the elements exist before adding event listeners
    if (toggleSkillsBtn && skillsList) {
        // Toggle visibility of the skills list when the button is clicked
        toggleSkillsBtn.addEventListener('click', function () {
            if (skillsList.style.display === 'none') {
                skillsList.style.display = 'block';
                toggleSkillsBtn.textContent = 'Hide Skills'; // Change button text to Hide
            } else {
                skillsList.style.display = 'none';
                toggleSkillsBtn.textContent = 'Show Skills'; // Change button text to Show
            }
        });
    }

    // Ensure the generate button exists before adding event listener
    if (generateButton && resumeOutput) {
        // Toggle visibility of the resume summary when the Generate Below button is clicked
        generateButton.addEventListener('click', function () {
            if (resumeOutput.style.display === 'none') {
                resumeOutput.style.display = 'block'; // Show the resume summary
            } else {
                resumeOutput.style.display = 'none'; // Hide the resume summary
            }
        });
    }
});

