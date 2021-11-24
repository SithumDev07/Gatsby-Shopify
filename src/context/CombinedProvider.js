import React from 'react'

import { StoreProvider } from "./storeContext"

function CombinedProvider({ element }) {
    return (
        <StoreProvider>
            {element}
        </StoreProvider>
    )
}

export default CombinedProvider
