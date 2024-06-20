import React, { memo } from 'react'

const Header = memo(() => {
  return (
    <>
      <nav className="flex w-full px-3 pt-5 pb-3 justify-between bg-opacity-0">
            <img className="h-8 mx-0 my-auto" src="/starter-code/assets/logo-dark.svg" alt="logo" />

            <div className=" h-8 w-[200px] bg-no-repeat mx-0 my-auto bg-[url(/starter-code/assets/logo-dark.svg)] dark:bg-[url(/starter-code/assets/logo-light.svg)]">
            </div>

            <button className="bg-[#13183F] text-[#F8F9FF] dark:bg-[#F8F9FF] dark:text-[#13183F] py-3 px-8 rounded-full m-[0 auto]  active:opacity-70 hover:opacity-70" type="button">Get Started</button>
      </nav>
    </>
  )
})

export default Header