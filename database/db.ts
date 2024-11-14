import * as SQLite from 'expo-sqlite';


const openDatabase = async () => {
  let db = await SQLite.openDatabaseAsync('localDatabase');
  return db;
};

export const setupDatabase = async () => {
  const db = await openDatabase();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL
    );
  `);
};


export const addTask = async (title: string, description: string) => {
  const db = await openDatabase();

  await db.runAsync(
    'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
    [title, description, 'pending']
  );

};

export const getTasksByStatus = async (status: string) => {
  const db = await openDatabase();
  const tasks = await db.getAllAsync('SELECT * FROM tasks WHERE status = ?', [status]);
  return tasks;
};

export const updateTask = async (id:number) => {
  const db = await openDatabase();

  await db.runAsync(
    'UPDATE tasks SET status = ? WHERE id = ?',
    ['completed', id]
  );

}

export const deleteTask = async (id: number) => {
  const db = await openDatabase();
  await db.runAsync('DELETE FROM tasks WHERE id = ?', [id]);
};

