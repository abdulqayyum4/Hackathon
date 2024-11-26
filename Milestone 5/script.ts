// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

     // Type assertion
     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const phoneElement = document.getElementById('phone') as HTMLInputElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
     const experienceElement = document.getElementById('experience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;





      //Check if all elements are present    
     if (profilePictureInput &&
        nameElement && 
        emailElement &&
        phoneElement && 
        educationElement &&
        experienceElement && 
        skillsElement 

        
        
    ) {

        //Get values from form
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


     

        // picture elements
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
      
        
        // create resume output
        const resumeHTML = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>phone:</strong>${phone}</p>

        <h3>Education:</h3>
        <p>${education}</p>

        <h3>Experience:</h3>
        <p>${experience}</p>

        <h3>Skills:</h3>
        <p>${skills}</p>
        `;


        //Display the resume in the output container
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");

            //create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Add Download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print(); //Open the print dialog, allowing the user to save as PDF.
            });
            buttonsContainer.appendChild(downloadButton);

            //Add shareable Link buttton
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async () => { 
                try{    
                //Create a unique shareable link (simulate it in this case)
const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g,"_")}_cv.html`;
                

        //Use Clipboard API to copy the shareable link
        await navigator.clipboard.writeText(shareableLink);
        alert("Shareable link copied to clipboard!");
      } catch (err) {   
        console.error("Failed to copy link: ", err);
        alert("Failed to copy link to clipboard. please try again.");
      }
    });
    buttonsContainer.appendChild(shareLinkButton);
   } else {
    console.error("Resume output container not found");
   }
  } else {
    console.error("Form elements are missing");
  }
});