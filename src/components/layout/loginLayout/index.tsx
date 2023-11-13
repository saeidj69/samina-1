import React, { ReactNode } from "react";


const index = ({children}:{ children: ReactNode }) => {
  return (
    <div>
        <p>
            Login page
        </p>
        <>
        {children}
        </>
    </div>
  )
}

export default index