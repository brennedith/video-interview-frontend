import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Content from './components/Content';
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

  return (
    <section>
      <Header />
      <Content>
        <AccountsTable accounts={accounts} />
      </Content>
    </section>
  );
};

export default Accounts;
