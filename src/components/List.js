import { List } from '@material-ui/core';
import React from 'react';
export default function List(j){
  jj=j;
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Cognome</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {contacts.map(jj => {
            return (
              <Table.Row key={jj.mail}>
                <Table.Cell>
                  {jj.name} {jj.surname}
                </Table.Cell>
                <Table.Cell>{jj.email}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }


