const inquiryForm = document.getElementById('inquiry-form')
const submit = document.getElementById('submit')

submit.addEventListener('click', submitInquiry)

function submitInquiry(event) {
   event.preventDefault();
   const formData = new FormData(inquiryForm);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);
   fetch('https://api.web3forms.com/submit', {
           method: "POST",
           headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           body: json
       })
       .then(async (response) => {
           if (response.status == 200) {
               alert("Message sent -- we'll be in touch.")
           } else {
               alert("Failed to send message. Please try again later.")
           }
       }).catch(function (error) {
           alert("An error occurred. Please try again later.")
           console.error(error);
       }).then(function() {
            inquiryForm.reset()
        })
   }