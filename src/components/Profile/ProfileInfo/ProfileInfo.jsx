import React from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo() {
    return <div>
        <div>
            <img src='https://i.ibb.co/DtP795s/Ge-Fv-Qk-Bb-SLa-Mdp-KXF1-Zv-bigstock-Aerial-View-Of-Blue-Lakes-And-227291596.jpg'/>
        </div>
        <div className={c.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;