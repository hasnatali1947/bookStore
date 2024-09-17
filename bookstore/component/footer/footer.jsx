"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

    const router = useRouter()

    return (
        <div>
            {/* <hr />    */}
            <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a onClick={() => {router.push("./contact")}} className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/hasnattali/" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                                aria-label="LinkedIn Icon"
                            >
                                <path
                                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.45c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.45h-3v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53v5.64z"
                                ></path>
                            </svg>
                        </a>

                        <a href="https://github.com/hasnatali1947" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                                aria-label="GitHub Icon"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.01-1.022-.015-1.852-2.782.604-3.368-1.342-3.368-1.342-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.003.071 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.03-2.681-.103-.252-.447-1.27.099-2.648 0 0 .84-.27 2.75 1.026A9.593 9.593 0 0 1 12 6.8c.852.004 1.708.115 2.509.336 1.909-1.296 2.749-1.026 2.749-1.026.548 1.378.204 2.396.1 2.648.641.698 1.03 1.59 1.03 2.681 0 3.841-2.337 4.687-4.563 4.936.36.309.682.92.682 1.852 0 1.337-.013 2.419-.013 2.746 0 .267.18.578.688.48C19.132 20.165 22 16.422 22 12 22 6.48 17.52 2 12 2z"
                                ></path>
                            </svg>
                        </a>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
