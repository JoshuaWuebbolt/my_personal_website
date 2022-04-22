import React, { useEffect } from 'react';
import '../styles/NavBar.css';



function Reroute() {
    
    useEffect(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, []);

    return (
        <div>

        </div>
    )

}

export default Reroute;