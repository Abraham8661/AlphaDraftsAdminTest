//Create Roles form popup                                                                                                                                                                                                                                                                                              form popup
const createNotificationSection = document.getElementById("create-notification-popup-section");
const openCreateSec = document.getElementById("create-new-notication");
const closeCreateFormBtn = document.getElementById("close-create-new-notification");
function showCreateForm() {
    createNotificationSection.classList.toggle("hidden");
    createNotificationSection.classList.toggle("flex");
}

closeCreateFormBtn.addEventListener("click", () => {
    showCreateForm();
});
openCreateSec.addEventListener("click", () => {
    showCreateForm();
});


//Edit Notification form popup                                                                                                                                                                                                                                                                                              form popup
const editNotificationSection = document.getElementById("Edit-notification-popup-section");
const openEditSec = document.getElementById("editData");
const closeEditFormBtn = document.getElementById("close-edit-role");
function showEditForm() {
    editNotificationSection.classList.toggle("hidden");
    editNotificationSection.classList.toggle("flex");
}

const allEditBtns = openEditSec.querySelectorAll('.editNotification');
//console.log(allEditProfileBtns)
allEditBtns.forEach((editBtn)=>{
    editBtn.addEventListener("click", () => {
        const notificationID = editBtn.firstElementChild.textContent
        const notificationIDFormField = editNotificationSection.querySelector("#roleIDtoEdit");
        notificationIDFormField.value = notificationID;
        showEditForm();
    });
})

closeEditFormBtn.addEventListener("click", () => {
    showEditForm();
});


//Delete roles form popup                                                                                                                                                                                                                                                                                              form popup
const deleteNotificationSection = document.getElementById("delete-notification-popup-section");
const tableSection = document.getElementById("editData");
const closeDeleteFormBtn = document.getElementById("close-delete-user-form-popup");
const cancelDeleteFormBtn = document.getElementById("cancelDelete");
function showDeleteForm() {
    deleteNotificationSection.classList.toggle("hidden");
    deleteNotificationSection.classList.toggle("flex");
}

const alldeleteUserBtns = tableSection.querySelectorAll('.deleteNotification');
//console.log(allEditProfileBtns)
alldeleteUserBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener("click", () => {
    const deleteNotificationID = deleteBtn.firstElementChild.textContent
    const deleteNotificationIDFormField = deleteNotificationSection.querySelector("#notificationIDtoDelete");
    deleteNotificationIDFormField.value = deleteNotificationID;
    showDeleteForm();
    });
})

closeDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});
cancelDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});