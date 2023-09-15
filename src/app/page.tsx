"use client"

import React, { useState, ChangeEvent } from 'react';
import Login from './log-in';

import { useAppSelector } from '@/redux/store';

interface List {
  id: number,
  text: string,
  completed: boolean
}

export default function Home() {
  const [lists, setLists] = useState<List[]>([]);
  const [todo, setToDo] = useState<string>('');

  const username = useAppSelector((state) => state.authReducer.value.username)
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
 

  const onAddToDo = () => {
    setLists([...lists, {id:Date.now(), text: todo, completed: false}]);
    setToDo('');
  };

  const onChangeToDo = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const onCompleted = (id:number) => {
    setLists((prevLists) => 
      prevLists.map((item) => 
        item.id === id ? {...item, completed: !item.completed} : item
      )
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>To Do App</p>
      <ul>
        {lists.map((item, index) => (
          <li onClick={() => onCompleted(item.id)} key={index} className={`${item.completed && 'line-through'}`}>
            {item.text}
          </li>
        ))}
      </ul>

      <input
        value={todo}
        onChange={onChangeToDo}
        className="border"
        type="text"
      />
      <button
        onClick={onAddToDo}
        className="border rounded-full mt-4 px-4 py-1"
      >
        Add To Do
      </button>

      <h1>Username: {username}</h1>
      {isModerator ? 'This user is a moderator' : 'user'}

      <Login/>
    </main>
  ); 
}
