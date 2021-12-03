export default function App() {
  return(
    <>
      <div className="grid grid-flow-col bg-purple-500 px-10 py-5 dark:bg-gray-900" >
        <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
        <ul className="lg:grid grid-flow-col content-center font-semibold hidden dark:text-white">
          <li>Tasks</li>
          <li>Reports</li>
          <li>Settings</li>
          <li>Profiles</li>
        </ul>
        <button className="lg:hidden text-lg font-semibold hover:bg-white hover:px-2 dark:text-white">Menu</button>
      </div>
      <div className="border-4 border-purple-300 border-dashed rounded-xl m-5 p-5 h-96">
        <h2>Dashboard Content</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <button className="bsf-btn-blue">Log In</button>
        <button className="bsf-btn-blue">Sign Up</button>
      </div>
    </>
  )
}