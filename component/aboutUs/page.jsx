import React from 'react'

const AboutUs = () => {
    return (
        <section className="py-12 px-6 bg-gray-100 text-gray-800">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-4">
                    Welcome to <span className="font-semibold text-blue-600">BookStore</span>!
                </p>
                <p className="mb-6">
                    At <span className="font-semibold text-blue-600">BookStore</span>, we believe in the power of books to transform lives, ignite imaginations, and expand horizons. Our mission is to provide a curated selection of the best books across various genres, ensuring that every reader finds their next great read.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="mb-6">
                    We are a passionate team of book lovers dedicated to connecting readers with exceptional literature. Our team meticulously curates every book in our collection, ensuring high quality and relevance.
                </p>
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2"><strong>Diverse Collection:</strong> From timeless classics to the latest bestsellers, our collection spans genres and interests to cater to every reader’s taste.</li>
                    <li className="mb-2"><strong>Free Books:</strong> We offer a selection of free books to make reading accessible to everyone, because we believe that great literature should be available to all.</li>
                    <li><strong>Courses and Resources:</strong> Explore our educational resources and courses that delve into the art of reading and writing, enhancing your literary journey.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="mb-6">
                    We are committed to providing an outstanding shopping experience with secure transactions, fast delivery, and excellent customer service. Our goal is to make every interaction with our site enjoyable and rewarding.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
                <p>
                    Connect with us on social media and subscribe to our newsletter to stay updated on the latest arrivals, special offers, and book-related news.
                </p>
                <p className="mt-6">
                    Thank you for choosing <span className="font-semibold text-blue-600">BookStore</span> as your go-to destination for books. Happy reading!
                </p>
            </div>
        </section>

    )
}

export default AboutUs
