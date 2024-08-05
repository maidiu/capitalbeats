const bearWhite = document.querySelector('.bearwhite');
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const buttons = document.querySelectorAll('button')
const aboutButton = document.getElementById('about-button')
const inquiriesButton = document.getElementById('inquiries-button')
const valuesButton = document.getElementById('values-button')
const contactButton = document.getElementById('contact-button')
const about = document.getElementById('about-section')
const inquiries = document.getElementById('inquiries-section')
const contact = document.getElementById('contact-section')
const texts = document.querySelectorAll('.texts')
const values = document.getElementById('values-section')
const igLogo = document.querySelector('.iglogo')
const submit = document.getElementById('submit')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const phoneInput = document.getElementById('phoneInput')
const bandNameInput = document.getElementById('bandNameInput')
const aboutInput = document.getElementById('aboutInput')
const arrangementInput = document.getElementById('arrangementInput')
const questionsInput = document.getElementById('questionsInput')
const anythingElseInput = document.getElementById('anythingElseInput')
const inquiryForm = document.getElementById('inquiry-form')
const customAlertText = document.getElementById('custom-alert-box-text')
const customAlert = document.getElementById('customAlert')


bearWhite.addEventListener('mousedown', function() {
   setTimeout(function() {
      aboutButton.classList.add('appear')}, 100)
   setTimeout(function() {
      valuesButton.classList.add('appear')}, 700)
   setTimeout(function() {
      inquiriesButton.classList.add('appear')}, 1300)
   setTimeout(function() {
      contactButton.classList.add('appear')}, 1900)
      bearWhite.style.transform = 'scale(1.04)'
})

bearWhite.addEventListener('mouseup', () => {
   bearWhite.style.transform = 'scale(1.05)';
});

document.addEventListener('DOMContentLoaded', function() {
   //setTimeout(function() {bearWhite.classList.add('appear')}, 1000);
   function flicker(opacity) {
      bearWhite.style.opacity = opacity;
    }
    for (let i = 1; i <= 13; i++) {
      const opacity = i % 2 === 0 ? 0 : i * 0.2;
      setTimeout(() => flicker(opacity), i * 100); // Toggle the class every 200ms
    }
    setTimeout(() => {
      bearWhite.style.opacity = '1';
    }, 14 * 100);
   setTimeout(function() {igLogo.classList.add('appear')}, 1800)
   setTimeout(function() {left.classList.add('appear')}, 2500);
   setTimeout(function() {right.classList.add('appear')}, 3200);

})

bearWhite.addEventListener('mouseover', function() {
   bearWhite.style.transform = 'scale(1.05)'
   //logo.style.transform = 'scale(1.05)'
   bearWhite.classList.toggle('glow')
   //logo.classList.toggle('glow')
})

bearWhite.addEventListener('mouseout', () => {
   bearWhite.style.transform = 'scale(1.0)'
   //logo.style.transform = 'scale(1.0)'
   bearWhite.classList.toggle('glow')
   //logo.classList.toggle('glow')
})

function showSection(section) {
   [about, values, inquiries, contact].forEach(elem => {
       if (elem !== section) {
           elem.classList.add('hidden');
       }
   });
   section.classList.remove('hidden');
}

aboutButton.addEventListener('click', () => showSection(about));
inquiriesButton.addEventListener('click', () => showSection(inquiries));
valuesButton.addEventListener('click', () => showSection(values));
contactButton.addEventListener('click', () => showSection(contact));




submit.addEventListener('click', submitInquiry)

function submitInquiry(event) {
    //const botcheck = document.querySelector('input[name="botcheck"]')
    //if (botcheck && !botcheck.checked) {
   event.preventDefault();
   const formData = new FormData(inquiryForm);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);

   /*const token = document.querySelector(".h-captcha").getAttribute("data-token");
   if (!token) {
       showAlert();
       customAlertText.innerText = "Please complete the captcha.";
       return;
   }

   fetch("verify-captcha.php", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           'h-captcha-response': token
       })
   }).then(async function (response) {
       if (!response.ok) {
           showAlert();
           customAlertText.innerText = "Failed to verify captcha. Please try again later.";
           return;
       }
    })*/
       // Captcha verified, now submit the form data
       fetch('https://api.web3forms.com/submit', {
           method: "POST",
           headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           body: json,
       })
       .then(async (response) => {
           if (response.status == 200) {
               showAlert();
               customAlertText.innerText = "Message sent -- we'll be in touch.";
           } else {
               showAlert();
               customAlertText.innerText = "Failed to send message. Please try again later.";
           }
       }).catch(function (error) {
           showAlert();
           customAlertText.innerText = "An error occurred. Please try again later.";
           console.error(error);
       }).then(function() {
            inquiryForm.reset()
        })
   } 

function hideAlert() {
   customAlert.classList.add('hidden');
 }


/*function submitInquiry(event) {
         event.preventDefault();
         const formData = new FormData(inquiryForm);
         const object = Object.fromEntries(formData);
         const json = JSON.stringify(object);

         const token = document.querySelector(".h-captcha").getAttribute("data-token");
            if (!token) {
            showAlert();
            customAlertText.innerText = "Please complete the captcha.";
            return;
         }
         /*const messageBody = {
            name: formData.get("nameInput"),
            email: formData.get("emailInput"),
            phone: formData.get("phoneInput"),
            bandName: formData.get("bandNameInput"),
            about: formData.get("aboutInput"),
            arrangement: formData.get("arrangementInput"),
            questions: formData.get("questionsInput"),
            anythingElse: formData.get("anythingElseInput")
            
  };        console.log(messageBody)*/
         /*const messageBody = `Hannah,
         
                      ${nameInput.value} has messaged you with regards to their project, 
                      ${bandNameInput.value}. 
                      
                      Concerning ${bandNameInput.value}, they have written the following:
                      '${aboutInput.value}'. 
                      
                      With regard to what they are looking for, they have written this: 
                      '${arrangementInput.value}'. 
                      
                      Their questions are '${questionsInput.value}', and their
                      additional comments are that '${anythingElseInput.value}'. 
                      
                      They can be reached either at their email ${emailInput.value}, 
                      or by phone at ${phoneInput.value}. 
                      
                      Godspeed,
                      Poke`
         
          fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: json
          }).then(async function (response) {
              if (response.ok) {
                  showAlert();
                  customAlertText.innerText = "Message sent -- we'll be in touch." //alert("Message sent successfully!");
              } else {
                  showAlert();
                  customAlertText.innerText = "Failed to send message. Please try again later.";
              }
          }).catch(function(error) {
               showAlert();
              customAlertText.innerText = "An error occurred. Please try again later.";
              console.error(error);
          });
      };*/

      
      
   