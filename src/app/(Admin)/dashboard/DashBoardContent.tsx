'use client';
import NavBar from '@/app/(Admin)/dashboard/Navbar';
import TaskList from '@/app/(Admin)/dashboard/TaskList';
import { useState } from 'react';

export default function DashBoardContent() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | 'completed' | 'incomplete'>('all');

  return (
    <>
      <NavBar status={status} setQuery={setQuery} setStatus={setStatus} />
      <TaskList query={query} status={status} />
    </>
  );
}
