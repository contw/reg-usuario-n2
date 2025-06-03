import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []); 

  if (users.length === 0) {
    return <p>Nenhum usuário cadastrado.</p>;
  }

  return (
    <List sx={{ mt: 2 }}>
      {users.map((user, index) => (
        <div key={index}>
          <ListItem>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}
