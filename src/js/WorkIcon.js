import React from 'react';

import ncr from '../Images/ncrlogo.png';
import instructor from '../Images/instructor.png';
import start from '../Images/start.png';

function WorkIcon() {
    return <img src={ncr} alt="Logo" className="ncrlogo" />;
}

function Instructor() {
    return <img src={instructor} alt="Logo" className="ncrlogo" />;
}
function Start() {
    return <img src={start} alt="Logo" className="ncrlogo" />;
}
export { WorkIcon, Instructor, Start };
