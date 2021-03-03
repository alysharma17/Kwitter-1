function add_user() {
    var username=document.getElementById("user_name").value;
    localStorage.SetItem("username",username);
}
