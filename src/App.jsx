import { useState } from "react";
import Navbar from "./Components/navbar";
import Newsboard from "./Components/newsboard";

const App = () => {
  const [category,setCategory]= useState("general");
  return (
    <div className="bg-black text-light position-relative" style={{minHeight: "100vh"}}>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <hr/>
      <footer className="text-left py-3 px-3" style={{fontSize: "0.85rem", width: "100%"}}>
        <p>
          Not getting news? Sometimes, the world of news can be unpredictable—sources may be slow, categories might be empty, or the internet just needs a moment to catch up. If you’re not seeing the latest updates, try exploring different categories, check your internet connection, or simply refresh the page. Remember, reading news keeps you informed and connected. Happy reading!
        </p>
      </footer>
      <div style={{position: "fixed", bottom: 10, right: 20, zIndex: 999, fontSize: "0.65rem", color: "#fff", opacity: 0.7}}>
       <i> 2025. Made with <span style={{color: "#e25555"}}>&hearts;</span> by Ishita Gupta</i>
      </div>
    </div>
  );
}

export default App;
