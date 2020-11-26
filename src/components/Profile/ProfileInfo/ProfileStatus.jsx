import React, {useEffect, useState} from 'react';
import c from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
            {!editMode &&
                <div>
                    <b>Статус: </b><span onClick={activateEditMode}>{status || "No Status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    }


export default ProfileStatus;