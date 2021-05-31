import React, { useContext } from 'react'
import ConteoContext from '../../context/ConteoContext'

export const Header = () => {


    const ctx = useContext(ConteoContext);
    console.log(ctx);
    return (
        <div>
{ctx.conteoFE}
        </div>
    )
}
