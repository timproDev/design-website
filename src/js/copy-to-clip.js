function initCopyEmail() {
  document.querySelectorAll('.copy-email-btn').forEach(button => {
    const feedback = button.nextElementSibling;
    const email = button.dataset.email;

    if (!feedback || !email) return;

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);

        feedback.textContent = 'My email has been successfully copied to your clipboard!';
        feedback.classList.add('show');
        button.classList.add('copied');

        setTimeout(() => {
          feedback.classList.remove('show');
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);

        feedback.textContent = 'Failed to copy email.';
        feedback.classList.add('show');

        setTimeout(() => {
          feedback.classList.remove('show');
        }, 2000);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initCopyEmail);

// function copyEmail() {
//   const button = document.getElementById("copy-email-btn");
//   const feedback = document.getElementById("feedback");

//   if (!button || !feedback) return;

//   const email = button.dataset.email;

//   button.addEventListener("click", async () => {
//     try {
//       await navigator.clipboard.writeText(email);

//       feedback.textContent = "My email is copied to your clipboard!";
//       feedback.classList.add("show");
//       button.classList.add("copied");

//       setTimeout(() => {
//         feedback.classList.remove("show");
//         button.classList.remove("copied");
//       }, 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);

//       feedback.textContent = "Failed to copy email.";
//       feedback.classList.add("show");

//       setTimeout(() => {
//         feedback.classList.remove("show");
//       }, 2000);
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", copyEmail);
