import React from 'react'
import '@/app/css/navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header >
      <div className='container mx-auto px-12 max-w-[1600px]'>
        <div className="flex py-3 border-b-2">
          <div className="w-full sm:w-1/3 lg:w-1/4 flex items-center justify-center sm:justify-start">
            <div className="main-logo">
              <Link href="/">
                <Image src="/logo-stretch.png" alt="logo" width={250} height={100} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 lg:ml-10">
            <div className="search-bar flex bg-slate-300 p-2 my-2 rounded-xl">
              <div className="hidden md:block md:w-1/4">
                <select className="border-0 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="w-full md:w-3/4">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 bg-transparent w-full" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div className="w-1/12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>

          <div class="sm:w-8/12 lg:w-1/3 flex justify-center sm:justify-end gap-5 items-center mt-4 sm:mt-0">
            <div class="hidden xl:block text-right">
              <span class="text-sm text-gray-500">For Support?</span>
              <h5 class="mb-0">+980-34984089</h5>
            </div>

            <ul class="flex justify-end space-x-3 m-0">
              <li>
                <a href="#" class="rounded-full bg-gray-100 p-2 mx-1 flex items-center justify-center w-12 h-12">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/>
                  </svg>
                </a>
              </li>

              <li>
              <a href="#" class="rounded-full bg-gray-100 p-2 mx-1 flex items-center justify-center w-12 h-12">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/>
                  </svg>
                </a>
              </li>
            </ul>

            <div class="min-w-[130px] text-end hidden lg:block relative">
              <button class="border-0 bg-transparent flex flex-col items-start gap-1 leading-tight" type="button" id="dropdownButton">
                <div class="flex items-center gap-1">
                  <span class="text-sm text-gray-500">Your Cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down text-gray-500" viewBox="0 0 16 16">
                    <path d="M1.5 5.5a.5.5 0 0 1 .707-.707L8 9.293l5.793-5.5a.5.5 0 0 1 .707.707l-6 5.5a.5.5 0 0 1-.707 0l-6-5.5a.5.5 0 0 1-.707.707z"/>
                  </svg>
                </div>
                <span class="cart-total text-lg font-semibold">$1290.00</span>
              </button>
            </div>
          </div>


          
        </div>
      </div>

      <div className='container mx-auto px-12 max-w-[1600px]'>
        <div className="flex py-3">
          <div class="flex justify-center sm:justify-between items-center">
          <nav class="main-menu flex flex-col lg:flex-row lg:items-center">
            <select className="w-full mb-5 border border-gray-300 p-3 rounded-lg">
              <option>Shop by Departments</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>

            {/* Navigation Menu */}
            <ul className="flex flex-col sm:flex-row sm:gap-3 justify-content-end">
              <li className="nav-item">
                <a href="#women" className="nav-link text-gray-700 hover:text-gray-900">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a href="#men" className="nav-link text-gray-700 hover:text-gray-900">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a href="#kids" className="nav-link text-gray-700 hover:text-gray-900">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#accessories"
                  className="nav-link text-gray-700 hover:text-gray-900"
                >
                  Accessories
                </a>
              </li>

              {/* Dropdown Menu */}
              <li className="relative nav-item">
                <button
                  className="nav-link text-gray-700 hover:text-gray-900 flex items-center"
                  id="pagesDropdown"
                >
                  Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="ml-1 h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 5.5a.5.5 0 0 1 .707-.707L8 11.293l5.793-5.5a.5.5 0 0 1 .707.707l-6 5.5a.5.5 0 0 1-.707 0l-6-5.5z"
                    />
                  </svg>
                </button>
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block"
                  aria-labelledby="pagesDropdown"
                >
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Single Product
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Single Post
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Styles
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      Thank You
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="block px-4 py-2 hover:bg-gray-100">
                      404 Error
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#brand" className="nav-link text-gray-700 hover:text-gray-900">
                  Brand
                </a>
              </li>
              <li className="nav-item">
                <a href="#sale" className="nav-link text-gray-700 hover:text-gray-900">
                  Sale
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>


      <nav className='flex justify-between items-center'>
        

        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href='/user/create'>
                <span>Create</span>
              </Link>

              <form action={async () => {
                "use server";
                
                await signOut({ redirectTo: "/"})}
              }>
                <button type='submit'>Sign Out</button>
              </form>

              <Link href={`user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              "use server";
              await signIn('google')}}>
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </nav>

    </header>

  )
}

export default Navbar
