import React from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';
import type { User } from "./types";
import Loader from './components/Loader';

export default function App() {
  let [loading, setLoad] = React.useState(false)
  let [items, setItems] = React.useState<User[]>([]);
  let [inputValue, setValue] = React.useState('');
  let [error, setError] = React.useState<Error | null>(null);

React.useEffect(() => {
   async function fetchData() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users?=limit=10");
        const users = await response.json();
        setItems(users);
      } catch (err) {
         if (err instanceof Error) {
           setError(err);
         }
      } finally {
         setLoad(true);
      }
   }
   fetchData();
}, []);

return (
   <div className='App'>
      <div className='Wrapper'>
         <section> 
            <h1>10 Users: Fetch and Search</h1>
            <Search value={inputValue} checkChange={value => setValue(value)}/>
            {error && <p className='Loader'>Error...</p>}
          </section>
         <section>
            {!loading && <Loader />}
            <UserList users={items} inputValue={inputValue}/>
         </section>
      </div>
   </div>
)
}