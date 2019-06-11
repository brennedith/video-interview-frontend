import React, { useState, useEffect } from 'react';

import AccountsTable from './components/accounts/AccountsTable';

import AccountService from '../services/account';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AccountService.getAll()
      .then(({ data: accounts }) => {
        setAccounts(accounts);
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  }, []);

  return <AccountsTable accounts={accounts} />;
};

export default Accounts;
