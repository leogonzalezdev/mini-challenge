import React from 'react';
import { Table } from '@nextui-org/react';

const TableUsers = ({ users, columns }) => {

  return (
    <Table
      bordered
      striped
      shadow={false}
      color="secondary"
      aria-label="Example pagination  table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        {
          columns?.map(column =>
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )
        }
      </Table.Header>

      <Table.Body>
        {
          users?.map((user, index) => {
            return(
              <Table.Row key={index}>
                <Table.Cell>{user.nombre}</Table.Cell>
                <Table.Cell>{user.edad}</Table.Cell>
                <Table.Cell>{user.carrera}</Table.Cell>
                <Table.Cell>{user.hobbie}</Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
      {/* <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      /> */}
    </Table>
  )
}

export default TableUsers