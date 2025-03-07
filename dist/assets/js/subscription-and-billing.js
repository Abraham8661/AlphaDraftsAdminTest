//Delete user form popup                                                                                                                                                                                                                                                                                              form popup
const deleteUserSection = document.getElementById("delete-user-popup-section");
const tableSection = document.getElementById("userData");
const closeDeleteFormBtn = document.getElementById("close-delete-user-form-popup");
const cancelDeleteFormBtn = document.getElementById("cancelDelete");
function showDeleteForm() {
  deleteUserSection.classList.toggle("hidden");
  deleteUserSection.classList.toggle("flex");
}

const alldeleteUserBtns = tableSection.querySelectorAll('.deleteUser');
//console.log(allEditProfileBtns)
alldeleteUserBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener("click", () => {
        const userID = deleteBtn.firstElementChild.textContent
        //console.log(userID)
        const userIDFormField = deleteUserSection.querySelector("#projectIDtoDelete");
        userIDFormField.value = userID;
        showDeleteForm();
    });
})

closeDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});
cancelDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});

//Cancel subscription form popup                                                                                                                                                                                                                                                                                              form popup
const cancelSubscriptionSection = document.getElementById("cancel-subscription-popup-section");
const closeSubscriptionFormBtn = document.getElementById("close-cancel-subscription-form-popup");
const cancelSubFormBtn = document.getElementById("cancelDelete");
function showSubscriptionForm() {
    cancelSubscriptionSection.classList.toggle("hidden");
    cancelSubscriptionSection.classList.toggle("flex");
}

const allCancelSubBtns = tableSection.querySelectorAll('.cancelSubscription');
allCancelSubBtns.forEach((subBtn)=>{
    subBtn.addEventListener("click", () => {
        const userID = subBtn.firstElementChild.textContent
        const subscriptionIDFormField = cancelSubscriptionSection.querySelector("#subscriptionIDtoCancel");
        subscriptionIDFormField.value = userID;
        showSubscriptionForm();
    });
})

closeSubscriptionFormBtn.addEventListener("click", () => {
    showSubscriptionForm();
});
cancelSubFormBtn.addEventListener("click", () => {
    showSubscriptionForm();
});