function submitForm() {
  const formData = {
    userID: document.getElementById("userID").value,
    workflowID: document.getElementById("workflowID").value,
    instruction: document.getElementById("instruction").value,
    input: document.getElementById("input").value
  };

  fetch('http://localhost:8013/process', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("reply_code").value = data.ollama_reply;
        document.getElementById("reply_answer").value = data.reply;
      } else {
        document.getElementById("reply_code").value = data.ollama_reply;
        document.getElementById("reply_answer").value = 'Error';
        alert("Error occurred while processing form: " + data.error);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
