import React, {Component} from 'react';
import TableRow from './TableRow';

const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th>Name</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      </thead>
    );
};

const TableBody = props => {
    const rows = props.itemData.map((row, index) => {
        return (
            <TableRow
                key={index}
                index={index}
                name={row.name}
                notes={row.notes}
                updateItem={props.updateItem}
                removeItem={props.removeItem}
            />
        );
    });

    return <tbody>{rows}</tbody>;
};

class Table extends Component {
    render() {
        const { itemData, updateItem, removeItem } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody
                    itemData={itemData}
                    updateItem={updateItem}
                    removeItem={removeItem}
                />
            </table>
        );
    }
}

export default Table;
