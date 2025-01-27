document.addEventListener("DOMContentLoaded", () => {
    const blogs = [
        {
            title: "Understanding JavaScript Closures",
            description: "A deep dive into closures in JavaScript, how they work, and why they are important in modern web development.",
            image: "assets/images/blogs/blog-1.webp"
        },
        {
            title: "React.js Performance Optimization Tips",
            description: "Learn how to improve the performance of your React applications using memoization, lazy loading, and React Profiler.",
            image: "assets/images/blogs/blog-2.avif"
        },
        {
            title: "Mastering Async/Await in JavaScript",
            description: "A beginner-friendly guide to understanding async/await and how to handle asynchronous operations effectively.",
            image: "assets/images/blogs/blog-1.webp"
        },
        {
            title: "Next.js vs React: Which One to Choose?",
            description: "Explore the key differences between Next.js and React and when to use each framework for your projects.",
            image: "assets/images/blogs/blog-3.avif"
        },
        {
            title: "Building Scalable REST APIs with Node.js",
            description: "A step-by-step guide on designing and building scalable REST APIs using Node.js and Express.js.",
            image: "assets/images/blogs/blog-2.avif"
        },
        {
            title: "A Guide to CSS Grid and Flexbox",
            description: "Master CSS Grid and Flexbox to create responsive and flexible layouts with ease.",
            image: "assets/images/blogs/blog-1.webp"
        },
        {
            title: "State Management in React: Redux vs Context API",
            description: "Comparing Redux and the Context API to help you choose the best state management solution for your React apps.",
            image: "assets/images/blogs/blog-3.avif"
        },
        {
            title: "Introduction to Web3 and Blockchain Development",
            description: "Get started with Web3 development, learn about blockchain technology, smart contracts, and decentralized applications.",
            image: "assets/images/blogs/blog-2.avif"
        },
        {
            title: "Optimizing Web Performance for Better UX",
            description: "Learn various techniques to optimize web performance, from lazy loading to reducing JavaScript bundle size.",
            image: "assets/images/blogs/blog-1.webp"
        },
        {
            title: "TypeScript for JavaScript Developers",
            description: "An introduction to TypeScript, its benefits, and how it enhances JavaScript development.",
            image: "assets/images/blogs/blog-3.avif"
        },
        {
            title: "Deploying React Apps with Vercel and Netlify",
            description: "A beginner-friendly tutorial on deploying React applications using Vercel and Netlify for seamless hosting.",
            image: "assets/images/blogs/blog-2.avif"
        },
    ];


    const blogList = document.getElementById("blog-list");
    const loadMoreButton = document.getElementById("load-more");
    let blogsPerPage = 9;
    let currentIndex = 0;

    function loadBlogs() {
        const blogsToLoad = blogs.slice(currentIndex, currentIndex + blogsPerPage);
        blogsToLoad.forEach(blog => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");

            blogCard.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <div class="blog-card-content">
                    <h2 class="blog-card-title">${blog.title}</h2>
                    <p class="blog-card-description">${blog.description}</p>
                    <a href="blog1.html" class="read-more">Read More</a>
                </div>
            `;
            blogList.appendChild(blogCard);
        });

        currentIndex += blogsPerPage;

        if (currentIndex >= blogs.length) {
            loadMoreButton.style.display = "none";
        }
    }

    loadMoreButton.addEventListener("click", loadBlogs);
    loadBlogs();
});
