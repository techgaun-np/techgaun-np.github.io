// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to format date
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to create blog card HTML
function createBlogCard(blog) {
    return `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}">
                <div class="blog-card-content">
                    <h2 class="blog-card-title">${blog.title}</h2>
                    <p class="blog-card-description">${blog.description}</p>
                    <a href="blog-detail.html?blogId=${blog.id}" class="read-more">Read More</a>
                </div>
        </div>
    `;
}

// Function to load other blogs
function loadOtherBlogs(currentBlogId) {
    const otherBlogsContainer = document.getElementById('other-blogs-container');
    if (!otherBlogsContainer) return;

    // Filter out current blog and get 3 random blogs
    const otherBlogs = window.blogs
        .filter(blog => blog.id !== currentBlogId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Create and append blog cards
    const blogsHTML = otherBlogs.map(blog => createBlogCard(blog)).join('');
    otherBlogsContainer.innerHTML = blogsHTML;
}

// Function to load blog content
function loadBlogContent() {
    try {
        const blogId = getUrlParameter('blogId');
        if (!blogId) {
            window.location.href = '/blogs.html';
            return;
        }

        // Find blog from shared data
        const blog = window.blogs.find(b => b.id === parseInt(blogId));

        if (!blog) {
            window.location.href = '/blogs.html';
            return;
        }

        // Update page title
        document.title = `${blog.title} - Techgaun`;

        // Update blog content
        const titleElement = document.getElementById('blog-title');
        const dateElement = document.getElementById('blog-date');
        const imageElement = document.getElementById('blog-image');
        const contentElement = document.getElementById('blog-content');

        if (titleElement) titleElement.textContent = blog.title;
        if (dateElement) dateElement.textContent = formatDate(blog.date);
        if (imageElement) {
            imageElement.src = `../${blog.image}`;
            imageElement.alt = blog.title;
        }
        if (contentElement) contentElement.innerHTML = blog.content;

        // Load other blogs
        loadOtherBlogs(parseInt(blogId));

    } catch (error) {
        console.error('Error loading blog content:', error);
        const contentElement = document.getElementById('blog-content');
        if (contentElement) {
            contentElement.innerHTML = '<p>Error loading blog content. Please try again later.</p>';
        }
    }
}

// Load blog content when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogContent();
}); 