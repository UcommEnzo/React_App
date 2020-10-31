import React from 'react';
import c from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChanged = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No Status"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChanged} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;