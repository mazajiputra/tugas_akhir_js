function buat_login() {
    //==Menghapus Tombol==
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);

    //==Tulisan==
    var p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan Mendaftar";

    //==DIV==
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);

    //==FORM INPUT==
    var form = document.createElement("FORM")
    element.appendChild(form);

    //1.
    var label1 = document.createElement("label");
    label1.innerHTML = "Nama User";
    form.appendChild(label1);

    var namaUser = document.createElement("input");
    namaUser.type = "text";
    namaUser.name = "nama";
    namaUser.className = "form_login";
    namaUser.placeholder = "Nama User..";
    form.appendChild(namaUser);

    //2.
    var label2 = document.createElement("label");
    label2.innerHTML = "Nomor Handphone";
    form.appendChild(label2);
    var nomorHP = document.createElement("input");
    nomorHP.type = "number";
    nomorHP.name = "nomor";
    nomorHP.className = "form_login";
    nomorHP.placeholder = "Nomor Handphone.";
    form.appendChild(nomorHP);

    //3
    var label3 = document.createElement("label");
    label3.innerHTML = "Username";
    form.appendChild(label3);
    var username = document.createElement("input");
    username.type = "text";
    username.name = "username";
    username.className = "form_login";
    username.placeholder = "Username atau email ..";
    form.appendChild(username);

    //4
    var label4 = document.createElement("label");
    label4.innerHTML = "Password";
    form.appendChild(label4);
    var password = document.createElement("input");
    password.type = "password";
    password.name = "pass";
    password.className = "form_login";
    password.placeholder = "Password ..";
    form.appendChild(password);

    //Tombol
    var tombol = document.createElement("button");
    tombol.type = "submit";
    tombol.innerHTML = "DAFTAR SEKARANG";
    tombol.className = "tombol_login";
    form.appendChild(tombol);

}