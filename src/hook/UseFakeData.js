import { useEffect } from "react";
import { useState } from "react"

const UseFakeData = (getFile) => {
    const [fakeData, setFakeData] = useState([]);
    useEffect(() => {
        fetch(`/${getFile}`)
            .then(res => res.json())
            .then(data => setFakeData(data))
    }, [])
    return [fakeData];
}
export default UseFakeData;
