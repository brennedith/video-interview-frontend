import React from 'react';

import './AccountsTable.css';

const AccountRow = ({ account }) => {
  account.slug = `/${account.slug}`;
  account.text =
    account.text.length > 120
      ? account.text.substring(0, 120) + '...'
      : account.text;
  account.credentials.secure = String(account.credentials.secure);

  return (
    <tr>
      <td>
        <a href={account.slug}>{account.slug}</a>
      </td>
      <td>{account.name}</td>
      <td>{account.text}</td>
      <td>{account.duration} sec</td>
      <td>{account.credentials.host}</td>
      <td>{account.credentials.user}</td>
      <td>{account.credentials.password}</td>
      <td>{account.credentials.secure}</td>
      <td className="options">
        <button className="button is-small is-success" type="text">
          Log
        </button>
        <button className="button is-small is-link" type="text">
          Edit
        </button>
        <button className="button is-small is-danger" type="text">
          Delete
        </button>
      </td>
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
          <th colSpan={3}>Account Information</th>
          <th colSpan={4}>FTP credentials</th>
          <th rowSpan={2}>Options</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Text</th>
          <th>Duration</th>
          <th>Host</th>
          <th>User</th>
          <th>Password</th>
          <th>Secure</th>
        </tr>
      </thead>
      <tbody>{accountRows}</tbody>
    </table>
  );
};

export default AccountsTable;
