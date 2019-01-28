import React, {Component} from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };
    }

    changeMode = () => {
        this.setState({ editMode: !this.state.editMode})
    };

    update = (index) => {
        this.props.updateItem(index);
        this.changeMode();
    };

    render() {
        const { index, name, notes } = this.props;

        return(
            this.state.editMode ?
                <tr>
                    <td><input type="text" name="name" defaultValue={name}/></td>
                    <td><input type="text" name="notes" defaultValue={notes}/></td>
                    <td>
                        <button onClick={this.update}>Submit</button>
                        <button onClick={this.changeMode}>
                            Cancel
                        </button>
                    </td>
                    <td>
                        <button onClick={() => this.props.removeItem(index)}>
                            Delete
                        </button>
                    </td>
                </tr> :
                <tr>
                    <td>{name}</td>
                    <td>{notes}</td>
                    <td>
                        <button onClick={this.changeMode}>
                            Edit
                        </button>
                    </td>
                    <td>
                        <button onClick={() => this.props.removeItem(index)}>
                            Delete
                        </button>
                    </td>
                </tr>
        )
    }
}

export default TableRow;