import React from 'react'
import '@/app/css/navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header >
      <div className='container-fluid'>
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <Link href="/">
                <Image src="/logo-stretch.png" alt="logo" width={250} height={100} />
              </Link>
            </div>
          </div>

          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>

          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div>

            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="rounded-full bg-gray-100 p-2 mx-1 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/>
                  </svg>
                </a>
              </li>

              <li>
              <a href="#" className="rounded-full bg-gray-100 p-2 mx-1 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/>
                  </svg>
                </a>
              </li>
            </ul>

            <div className="cart text-end d-none d-lg-block dropdown">
              <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" id="dropdownButton">
                <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                <span className="cart-total fs-5 fw-bold">$1290.00</span>
              </button>
            </div>
          </div>


          
        </div>
      </div>

      <div className='container-fluid'>
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
          <nav className="main-menu d-flex navbar navbar-expand-lg">
            <select className="filter-categories border-0 mb-0 me-5">
              <option>Shop by Departments</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>

            {/* Navigation Menu */}
            <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
              <li className="nav-item active">
                <a href="#women" className="nav-link">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a href="#men" className="nav-link">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a href="#kids" className="nav-link">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#accessories"
                  className="nav-link"
                >
                  Accessories
                </a>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu" aria-labelledby="pages">
                  <li><a href="index.html" className="dropdown-item">About Us </a></li>
                  <li><a href="index.html" className="dropdown-item">Shop </a></li>
                  <li><a href="index.html" className="dropdown-item">Single Product </a></li>
                  <li><a href="index.html" className="dropdown-item">Cart </a></li>
                  <li><a href="index.html" className="dropdown-item">Checkout </a></li>
                  <li><a href="index.html" className="dropdown-item">Blog </a></li>
                  <li><a href="index.html" className="dropdown-item">Single Post </a></li>
                  <li><a href="index.html" className="dropdown-item">Styles </a></li>
                  <li><a href="index.html" className="dropdown-item">Contact </a></li>
                  <li><a href="index.html" className="dropdown-item">Thank You </a></li>
                  <li><a href="index.html" className="dropdown-item">My Account </a></li>
                  <li><a href="index.html" className="dropdown-item">404 Error </a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#brand" className="nav-link">
                  Brand
                </a>
              </li>
              <li className="nav-item">
                <a href="#sale" className="nav-link">
                  Sale
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
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
