window.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("message");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission! 📧";
          status.classList.add('message-success');
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = " ❌ Oops! There was a problem submitting your form ❌";
              status.classList.add('message-fail');
            }
          })
        }
      }).catch(error => {
        status.innerHTML = " ❌ Oops! There was a problem submitting your form ❌";
        status.classList.add('message-fail');
      });
    }
    form.addEventListener("submit", handleSubmit) 
});