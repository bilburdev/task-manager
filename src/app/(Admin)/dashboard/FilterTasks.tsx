export default function FilterTasks({
  status,
  setStatus,
}: {
  status: 'all' | 'completed' | 'incomplete';
  setStatus: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'incomplete'>>;
}) {
  type FilterTasksType = 'all' | 'completed' | 'incomplete';
  const handleFilterTasks = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value as FilterTasksType;
    setStatus(selectedStatus);
  };

  return (
    <div>
      <select
        value={status}
        onChange={handleFilterTasks}
        className="bg-gray-700 text-white p-2 rounded"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="incomplete">Incomplete Tasks</option>
      </select>
    </div>
  );
}
