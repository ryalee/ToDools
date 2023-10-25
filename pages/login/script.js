function changeLoginScreen() {
  const changeLogin = document.querySelector('#signUp');
  const loginInFocus = document.querySelector('.signIn')

  changeLogin.classList.toggle('showed');
  loginInFocus.classList.toggle('oculted');
}

function showPassword() {
  const passwordShow = document.querySelector('.fa-eye');
  const passwordHide = document.querySelector('.fa-eye-slash');
  const password = document.querySelector('.passwordInput');

  if(password.type === 'password') {
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }

  passwordShow.classList.toggle('fa-eye-slash');
  passwordHide.style.display = 'block';
}