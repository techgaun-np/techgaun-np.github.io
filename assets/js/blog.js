document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");
    const loadMoreButton = document.getElementById("load-more");
    let blogsPerPage = 9;
    let currentIndex = 0;

    function loadBlogs() {
        const blogsToLoad = window.blogs.filter(blog => blog.id !== 1).slice(currentIndex, currentIndex + blogsPerPage);
        blogsToLoad.forEach(blog => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");

            blogCard.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <div class="blog-card-content">
                    <h2 class="blog-card-title">${blog.title}</h2>
                    <p class="blog-card-description">${blog.description}</p>
                    <a href="blog-detail?blogId=${blog.id}" class="read-more">Read More</a>
                </div>
            `;
            blogList.appendChild(blogCard);
        });

        currentIndex += blogsPerPage;

        if (currentIndex >= window.blogs.length) {
            loadMoreButton.style.display = "none";
        }
    }

    loadMoreButton.addEventListener("click", loadBlogs);
    loadBlogs();
});