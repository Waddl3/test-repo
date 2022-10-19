const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Followed';
})

if (btn.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Unfollow';
} else {
    btn.textContent = initialText;
}