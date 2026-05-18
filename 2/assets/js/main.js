const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const backTop = document.getElementById('backTop');
const inquiryForm = document.getElementById('inquiryForm');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('active');
    menuBtn.textContent = siteNav.classList.contains('active') ? '×' : '☰';
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
      menuBtn.textContent = '☰';
    });
  });
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('active');
  });
});

if (backTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backTop.classList.add('show');
    } else {
      backTop.classList.remove('show');
    }
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (inquiryForm) {
  inquiryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const company = document.getElementById('company')?.value.trim() || '';
    const country = document.getElementById('country')?.value.trim() || '';
    const product = document.getElementById('product')?.value.trim() || '';
    const quantity = document.getElementById('quantity')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Please fill in your name, email and project details.');
      return;
    }

    /*
      Replace this email with the real inquiry receiving email.
      Example: sales@arc-china.com
    */
    const recipientEmail = 'sales@example.com';

    const subject = encodeURIComponent('Bicycle Hub Inquiry from Website');
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Company: ' + company + '\n' +
      'Country / Region: ' + country + '\n' +
      'Product Interest: ' + product + '\n' +
      'Estimated Quantity: ' + quantity + '\n\n' +
      'Project Details:\n' + message
    );

    if (recipientEmail === 'sales@example.com') {
      alert('Form checked successfully. Please replace sales@example.com in assets/js/main.js with the real inquiry email before publishing.');
      return;
    }

    window.location.href = 'mailto:' + recipientEmail + '?subject=' + subject + '&body=' + body;
  });
}