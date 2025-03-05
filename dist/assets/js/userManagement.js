//Edit profile form popup                                                                                                                                                                                                                                                                                              form popup
const editProfileSection = document.getElementById("edit-profile-popup-section");
const openEditProfileSec = document.getElementById("userData");
const closeEditProfileFormBtn = document.getElementById("close-edit-profle-form-popup");
function showEditProfileForm() {
    editProfileSection.classList.toggle("hidden");
    editProfileSection.classList.toggle("flex");
}

const allEditProfileBtns = openEditProfileSec.querySelectorAll('.editUser');
//console.log(allEditProfileBtns)
allEditProfileBtns.forEach((editBtn)=>{
    editBtn.addEventListener("click", () => {
        const userID = editBtn.firstElementChild.textContent
        console.log(userID)
        const userIDFormField = editProfileSection.querySelector("#selectedUserID");
        userIDFormField.value = userID;
        showEditProfileForm();
    });
})

closeEditProfileFormBtn.addEventListener("click", () => {
    showEditProfileForm();
});

//Profile image change
let input = document.getElementById('new-photo');
function previewImage() {
    let preview = document.getElementById('imagePreview');

    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    var file = input.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = function (e) {
        let img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '96px';
        img.style.height = '96px';
        img.style.borderRadius = '9999px';
        img.style.objectFit = 'cover';
        preview.appendChild(img);
      };

      reader.readAsDataURL(file);
    }
}
input.addEventListener('change', ()=>{
    previewImage()
})

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
        const userIDFormField = deleteUserSection.querySelector("#userIDtoDelete");
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

//Change password form popup                                                                                                                                                                                                                                                                                              form popup
const changePasswordSection = document.getElementById("change-password-popup-section");
const closePasswordFormBtn = document.getElementById("close-change-password-form-popup");
function showPasswordForm() {
  changePasswordSection.classList.toggle("hidden");
  changePasswordSection.classList.toggle("flex");
}

const allpasswordChangeBtns = tableSection.querySelectorAll('.editPassword');
//console.log(allEditProfileBtns)
allpasswordChangeBtns.forEach((passwordBtn)=>{
  passwordBtn.addEventListener("click", () => {
        const userID = passwordBtn.firstElementChild.textContent
        //console.log(userID)
        const userIDFormField = changePasswordSection.querySelector("#selectedUserID");
        userIDFormField.value = userID;
        showPasswordForm();
    });
})

closePasswordFormBtn.addEventListener("click", () => {
  showPasswordForm  ();
});