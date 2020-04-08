import React, {useState} from 'react'

/**
 * *Import CSS
 */
import '../../CSS/tailwind-styles/main.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    

    return (
        <nav class="flex items-center justify-between flex-wrap bg-green-500 p-3 fixed w-full z-10 pin-t">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i> Agrivator</span>
                </a>
            </div>

            <div class="block lg:hidden">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white" onClick={()=>setToggle(!toggle)}>
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            {/* If toggle is true then display the below div, else keep it hidden */}
            <div class={`${
                    toggle ? `block` : `hidden`
                }
                w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0`} id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <a class="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                    </li>
                    <li class="mr-3">
                        <a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                    <li class="mr-3">
                        <a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                    <li class="mr-3">
                        <a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
