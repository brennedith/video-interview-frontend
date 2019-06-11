import React from 'react';

import './AccountsTable.css';

const AccountRow = ({ account }) => {
  return (
    <tr>
      <th>/{account.slug}</th>
      <th>{account.name}</th>
      <th>{account.duration}</th>
      <th>{account.credentials.host}</th>
      <th>{account.credentials.user}</th>
      <th>{account.credentials.password}</th>
      <th>{String(account.credentials.secure)}</th>
      <th className="options">
        <button className="button is-small is-success" type="text">
          Log
        </button>
        <button className="button is-small is-link" type="text">
          Edit
        </button>
        <button className="button is-small is-danger" type="text">
          Delete
        </button>
      </th>
    </tr>
  );
};

const AccountsTable = ({ accounts }) => {
  const accountRows = accounts.map(account => (
    <AccountRow key={account._id} account={account} />
  ));

  return (
    <table className="accounts-table table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th rowSpan={2}>Access url</th>
          <th colSpan={2}>Account Information</th>
          <th colSpan={4}>FTP credentials</th>
          <th rowSpan={2}>Options</th>
        </tr>
        <tr>
          <th>name</th>
          <th>duration</th>
          <th>host</th>
          <th>user</th>
          <th>password</th>
          <th>secure</th>
        </tr>
      </thead>
      <tbody>{accountRows}</tbody>
    </table>
  );
};

export default AccountsTable;
