import { useState } from 'react';
import { Container, Tabs, Tab } from '@mui/material';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleAddUser = (user) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...existingUsers, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <Container>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
        <Tab label="Cadastro de Usuário" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>

      {tabIndex === 0 && <UserForm onAddUser={handleAddUser} />}
      {tabIndex === 1 && <UserList />}
    </Container>
  );
}

export default App;
