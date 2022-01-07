function adduser(){
    user_name=document.getElementById("add_user").value;
    localStorage.setItem( "username ", user_name);
    window.location="Flipkart_store.html";
}