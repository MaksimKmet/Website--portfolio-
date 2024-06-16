function postStatus() {
    const postBox = document.querySelector('.post-box textarea');
    const postsContainer = document.querySelector('.posts');
    const postContent = postBox.value;

    if (postContent) {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `<h3>Your Name</h3><p>${postContent}</p>`;
        postsContainer.prepend(postElement);
        postBox.value = '';
    } else {
        alert('Please write something to post.');
    }
}
