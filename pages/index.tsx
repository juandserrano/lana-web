import Summary from "../components/Summary";
import TransactionList from "../components/TransactionList";
import create from 'zustand'

const useStore = create((set) => ({
  budgeted: 0,
  spent: 0,
  total: 0,
}))

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="flex w-10/12 justify-between space-x-2">
        <Summary />
        <div className="border bg-indigo-200 w-1/2 h-36"></div>
      </div>
      <TransactionList />
    </div>
  );
};

export default Home;
