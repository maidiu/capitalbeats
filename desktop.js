const bearWhite = document.querySelector('.bearwhite');
const left = document.querySelector('.left')
const leftPhone = document.querySelector('.left-phone')
const right = document.querySelector('.right')
const rightPhone = document.querySelector('.right-phone')
const buttons = document.querySelectorAll('button')
const aboutButton = document.getElementById('about-button')
const inquiriesButton = document.getElementById('inquiries-button')
const valuesButton = document.getElementById('values-button')
const contactButton = document.getElementById('contact-button')
const about = document.getElementById('about-section')
const inquiries = document.getElementById('inquiries-section')
const contact = document.getElementById('contact-section')
const main = document.querySelector('.main')
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
const igLogoPhone = document.querySelector('.iglogophone')
const bgLogoPhone = document.querySelector('.background-logo-phone')
const sidebar = document.querySelector('.sidebar')
const footerPhone = document.querySelector('.footer-text-container')
const customAlertClose = document.getElementById('custom-alert-close')
const customAlertText = document.getElementById('custom-alert-box-text')
const customAlert = document.getElementById('customAlert')

const items = [
                  aboutButton, 
                  valuesButton, 
                  inquiriesButton, 
                  contactButton, 
                  igLogoPhone, 
                  leftPhone, 
                  rightPhone]

function buttonsAppearDesktop() {
    
        aboutButton.classList.add('appear')
     setTimeout(function() {
        valuesButton.classList.add('appear')}, 300)
     setTimeout(function() {
        inquiriesButton.classList.add('appear')}, 600)
     setTimeout(function() {
        contactButton.classList.add('appear')}, 900)
}

function buttonsAppear() {
    
        aboutButton.classList.add('appear')
     setTimeout(function() {
        valuesButton.classList.add('appear')}, 300)
     setTimeout(function() {
        inquiriesButton.classList.add('appear')}, 600)
     setTimeout(function() {
        contactButton.classList.add('appear')}, 900)
}

function restAppears() {
    setTimeout(function() {
        bgLogoPhone.classList.add('bg-logo-appear')}, 1200)
    setTimeout(function() {
        leftPhone.classList.add('appear')}, 1500)
    setTimeout(function() {
        igLogoPhone.classList.add('appear')}, 1800)
    setTimeout(function() {
        rightPhone.classList.add('appear')}, 2100)
    
}

bearWhite.addEventListener('touchstart', function() {
    bearWhite.style.transform = "scale(0.99)";
})

let isWebsiteOn = true;
let isFirstClick = true;
let isBearShrunk = false;

bearWhite.addEventListener('touchend', function(e) {
    e.preventDefault();
    if (isBearShrunk) {
        unShrink()
        return;
    }
    if (!isWebsiteOn === true) {
        items.forEach(item => {
            item.classList.replace('dim', 'appear')
            bearWhite.classList.add('glow')
            bearWhite.style.opacity = 1
            bgLogoPhone.classList.replace('dim', 'bg-logo-appear')
            isWebsiteOn = true;
        })
    } else {
            bearWhite.classList.remove('glow')
            bearWhite.style.opacity = .2
            items.forEach(item => {
                item.classList.replace('appear', 'dim')
            })
            bgLogoPhone.classList.replace('bg-logo-appear', 'dim')
            isWebsiteOn = false;
    }
    bearWhite.style.transform = "scale(1)";
    
})

bearWhite.addEventListener('mousedown', function() {
    buttonsAppear();
    bearWhite.style.transform = 'scale(1.04)'
})



bearWhite.addEventListener('mouseup', () => {
   bearWhite.style.transform = 'scale(1.05)';
});

function flicker(opacity) {
    bearWhite.style.opacity = opacity;
  }
  for (let i = 1; i <= 13; i++) {
    const opacity = i % 2 === 0 ? 0 : i * 0.2;
    setTimeout(() => flicker(opacity), i * 100); // Toggle the class every 200ms
  }

function flickerSet(finalOpacityStr) {
    flicker();
    setTimeout(() => {
      bearWhite.style.opacity = finalOpacityStr;
    }, 14 * 100);
}

document.addEventListener('DOMContentLoaded', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 599){
   //setTimeout(function() {bearWhite.classList.add('appear')}, 1000);
   flickerSet('1')
   setTimeout(buttonsAppear, 1600)
   setTimeout(function() {igLogo.classList.add('appear')}, 1800)
   setTimeout(function() {left.classList.add('appear')}, 2500);
   setTimeout(function() {right.classList.add('appear')}, 3200);
    } else if (windowWidth <= 599) {
        setTimeout(buttonsAppear, 1600)
        setTimeout(restAppears, 1600)
    }

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



function shrinkAndShow(section) {
    if (window.innerWidth < 600){
        shrink();
    showSection(section)
    if (isBearShrunk === false) {
        isBearShrunk = true
    }} else {
        showSection(section)
    }
}




function shrink () {
    bgLogoPhone.classList.add('dim-bg-logo')
    bearWhite.classList.add('shrink-bear')
    sidebar.classList.add('shrink-sidebar')
    
}

function unShrink () {
    if (isBearShrunk) {
    [about, values, inquiries, contact].forEach(elem => {
        if (!elem.classList.contains('hidden')) {
        elem.classList.add('hidden')}
    })
    bearWhite.classList.remove('shrink-bear')
    sidebar.classList.remove('shrink-sidebar')
    bgLogoPhone.classList.remove('dim-bg-logo')
    
    isBearShrunk = false;
}
}

function showSection(section) {
   [about, values, inquiries, contact].forEach(elem => {
       if (elem !== section) {
           elem.classList.add('hidden');
       }
   });
       if ((window.innerWidth < 600)) {
            if (!isBearShrunk) {
            setTimeout(() => {section.classList.remove('hidden')}, 350)
        } else {section.classList.remove('hidden')}
       } else {section.classList.remove('hidden')}
}



aboutButton.addEventListener('click', () => shrinkAndShow(about));
inquiriesButton.addEventListener('click', () => shrinkAndShow(inquiries));
valuesButton.addEventListener('click', () => shrinkAndShow(values));
contactButton.addEventListener('click', () => shrinkAndShow(contact));




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
           body: json,
       })
       .then(async (response) => {
           if (response.status == 200) {
               showAlert();
               customAlertText.innerText = "Message sent -- we'll be in touch.";
               customAlertClose.innerText = "nice"
           } else {
               showAlert();
               customAlertText.innerText = "Something's up, sorry. Please try again later.";
                customAlertClose.innerText = "got it"
           }
       }).catch(function (error) {
           showAlert();
           customAlertText.innerText = "An error occurred. Please try again later.";
           customAlertClose.innerText = "damn"
           console.error(error);
       }).then(function() {
            inquiryForm.reset()
        })
   } 

   /*texts.addEventListener('scroll', function() {
    if (texts.scrollHeight - texts.scrollTop === texts.clientHeight) {
        
        main.scrollTop += 1;
    }
});*/


