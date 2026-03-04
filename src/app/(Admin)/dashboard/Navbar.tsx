'use client';

import FilterTasks from '@/app/(Admin)/dashboard/FilterTasks';
import SearchBar from '@/app/(Admin)/dashboard/SearchBar';
import AddTaskModal from '@/components/AddTaskModal';
import Logout from '@/components/Logout';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function NavBar({
  setQuery,
  status,
  setStatus,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  status: 'all' | 'completed' | 'incomplete';
  setStatus: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'incomplete'>>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-wrap justify-between items-center p-4 gap-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Task Dashboard</h1>
      <div className="flex gap-3 items-center ">
        <div className="flex gap-3 items-center">
          <SearchBar setQuery={setQuery} />
          <Button onClick={() => setIsModalOpen(true)}>Create</Button>
        </div>

        {/* Filter Completed / Incompleted */}
        <FilterTasks status={status} setStatus={setStatus} />
      </div>
      <Logout />
      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
