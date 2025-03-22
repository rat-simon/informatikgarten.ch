// import { useSession } from "next-auth/react";
import FeatherIcon from 'feather-icons-react'
import type { TurtleConfigType } from './types/TurtleTypes'
import { saveToRemote } from './utils/autosave'

function ButtonCloud(c: TurtleConfigType) {
    // const { data: session } = useSession();

    // if (!session) return null; // If no session exists, return null

    // If session exists, render your component
    return (
        <a
            className="cursor-pointer"
            title="Save local history to remote"
            onClick={() => saveToRemote(c)}
        >
            <FeatherIcon size="16" icon="upload-cloud" />
        </a>
    )
}

export default ButtonCloud
