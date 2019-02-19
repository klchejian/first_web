function check() {
    var regusername = { regstr: /^[\w]{1,6}$/, tip: '用户名请输入1-6位的英文、数字、下划线' };
    var username = document.getElementById("username").value;
    if (!regusername.regstr.test(username)) {
        alert(regusername.tip)
        // return;
    }

    var regpassword = { regstr: /^[\w]{1,6}$/, tip: '密码请输入1-6位的英文、数字、下划线' };
    var password = document.getElementById("password").value;
    if (!regpassword.regstr.test(password)) {
        alert(regpassword.tip)
        // return;
    }

    window.location.href='index.html';
}