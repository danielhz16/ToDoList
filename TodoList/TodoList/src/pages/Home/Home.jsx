import UseFetch from '../../hooks/useFetch';
import TaskList from './components/TaskList/TaskList';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import WriteTask from './components/WriteTask/WriteTask'; 

const Home = ({ toggleTheme, theme }) => {
const { data, loading, error, refetch } = UseFetch(`${import.meta.env.VITE_BACKEND_URL}tasks`);

if (loading) return <strong>Cargando...</strong>;
if (error) return <strong>{error.message || 'Ocurrió un error inesperado'}</strong>;

const tasks = Array.isArray(data) ? data : data.recordset || [];


 return ( 
  <> 
     <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
     <WriteTask  refetch={refetch} />
     <TaskList data={tasks} error={error} loading={loading} refetch={refetch} /> 
  </>
)
};


export default Home;
