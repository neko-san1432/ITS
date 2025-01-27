export function transi() {
    document.getElementById('transition').style.animation = 'move-center 4s ease-in-out forwards';
    setTimeout(() => {
        document.getElementById('transition').style.animation = 'reset-position 2s ease-in-out forwards';
    }, 4000);
}