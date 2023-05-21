const form = document.getElementById("form_sentence");
if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let sentence = formData.get("sentence");

    if (sentence.length <= 8){
      
      alertMessages("success", "Please input at least 8 characters");
      return;
    }

    

    // console.log(formData.get("sentence"));

    const response = await window.axios.openAI(formData.get("sentence"));
    document.getElementById("sentence_corrected").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
  };
}
 function alertMessages(status, sentence){
  window.Toastify.showToast({
    text: sentence,
    duration: 3000,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: status == "error" ? "red":"linear-gradient(to right, #00c0c4, #56d93c)" ,
      textAlign: "center",
      color: "white",
      padding: "5px",
      marginTop: "2px",
      fontFamily: "jokerman"
    }
  });
 }