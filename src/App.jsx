import { useState } from 'react';
import { Tabs, Tab, Box, Paper } from '@mui/material';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleAddUser = (user) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...existingUsers, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    window.location.reload(); // atualiza a lista ao cadastrar
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', bgcolor: 'white', boxShadow: 1 }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Cadastro de Usuário" />
          <Tab label="Usuários Cadastrados" />
        </Tabs>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Paper sx={{ width: '100%', maxWidth: 600, p: 3 }}>
          {tabIndex === 0 && <UserForm onAddUser={handleAddUser} />}
          {tabIndex === 1 && <UserList />}
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
