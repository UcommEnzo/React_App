import React from 'react';
import c from './Fiends.module.css';

function Friends(props) {
    let friendsElements = props.state.map(f => <Friends name={f.name}/>)

    return <div className={c.friends}>
        {friendsElements}
    </div>
}

export default Friends;