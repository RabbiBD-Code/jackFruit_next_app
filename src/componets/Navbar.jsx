import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/jack-logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">JackFruit</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/products"}>Products</Navlink>
          </li>
          
          <li>
            <Navlink href={"/profile"}>My-Profile</Navlink>
          </li>
        </ul>

        <div className="flex gap-4">
          
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>

          {/* {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )} */}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;