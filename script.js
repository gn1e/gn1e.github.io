function showError() {
    const errorMessage = document.getElementById('error-message');
    const progressBar = document.querySelector('.progress-bar');

    errorMessage.style.bottom = '20px';

    progressBar.style.animation = 'none'; 
    setTimeout(() => {
        progressBar.style.animation = ''; 
        progressBar.style.animation = 'progress 3s linear forwards';
    }, 10);

    setTimeout(() => {
        errorMessage.style.bottom = '-100%';
    }, 3000);
}
