import React from 'react';

interface StatusType {
    status: string
    updateStatus: (status) => any
}

class ProfileStatus extends React.Component<StatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps,prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }

}

export default ProfileStatus