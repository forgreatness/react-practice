import React, { useState } from 'react';

interface TableType {
    type: string;
    material: string;
    price: number;
}

export interface WorkTable extends TableType {
    isStandingDesk: boolean;
}

export interface DiningTable extends TableType {
    capacity: number;
}

interface TableProps<T extends TableType> {
    table: T
}

interface TableState {
    condition: string
}

class TableComponent<T extends TableType> extends React.Component<TableProps<T>, TableState> {
    constructor(props: TableProps<T>) {
        super(props);

        this.state = {
            condition: "New"
        }
    }

    render() {
        return (
            <div>
                <h3>This is table {this.props.table.type}</h3>
            </div>
        )
    }
}

export {TableComponent}