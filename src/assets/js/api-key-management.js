//Create API key form popup                                                                                                                                                                                                                                                                                              form popup
const createAPIKeySection = document.getElementById("create-apikey-popup-section");
const openCreateSec = document.getElementById("create-new-apikey");
const closeCreateFormBtn = document.getElementById("close-create-new-apikey");
function showCreateForm() {
    createAPIKeySection.classList.toggle("hidden");
    createAPIKeySection.classList.toggle("flex");
}

closeCreateFormBtn.addEventListener("click", () => {
    showCreateForm();
});
openCreateSec.addEventListener("click", () => {
    showCreateForm();
});


//Edit API key form popup                                                                                                                                                                                                                                                                                              form popup
const editAPIKeySection = document.getElementById("edit-apikey-popup-section");
const openEditSec = document.getElementById("editData");
const closeEditFormBtn = document.getElementById("close-edit-apikey");
function showEditForm() {
    editAPIKeySection.classList.toggle("hidden");
    editAPIKeySection.classList.toggle("flex");
}

const allEditBtns = openEditSec.querySelectorAll('.editAPIKey');
//console.log(allEditProfileBtns)
allEditBtns.forEach((editBtn)=>{
    editBtn.addEventListener("click", () => {
        const apiKeyID = editBtn.firstElementChild.textContent
        const apiKeyIDFormField = editAPIKeySection.querySelector("#selectedAPIKeyID");
        apiKeyIDFormField.value = apiKeyID;
        showEditForm();
    });
})

closeEditFormBtn.addEventListener("click", () => {
    showEditForm();
});



//Delete API key form popup                                                                                                                                                                                                                                                                                              form popup
const deleteAPIkeySection = document.getElementById("delete-apikey-popup-section");
const tableSection = document.getElementById("editData");
const closeDeleteFormBtn = document.getElementById("close-apikey-form-popup");
const cancelDeleteFormBtn = document.getElementById("cancelDelete");
function showDeleteForm() {
    deleteAPIkeySection.classList.toggle("hidden");
    deleteAPIkeySection.classList.toggle("flex");
}

const alldeleteUserBtns = tableSection.querySelectorAll('.deleteAPIkey');
//console.log(allEditProfileBtns)
alldeleteUserBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener("click", () => {
    const deleteAPIkeyID = deleteBtn.firstElementChild.textContent
    const deleteApiKeyIDFormField = deleteAPIkeySection.querySelector("#apiKeyIDtoDelete");
    deleteApiKeyIDFormField.value = deleteAPIkeyID;
    showDeleteForm();
    });
})

closeDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});
cancelDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});