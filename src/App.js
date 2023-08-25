import "./App.css";
import emojipedia from "./Components/emojipedia";
import Entery from "./Components/Entery";



 function CreateEntery(emojiTerm) {
    return (          
      <Entery 
           id = {emojiTerm.id}
           emoji = {emojiTerm.emoji}
           name = {emojiTerm.name}
           meaning ={emojiTerm.meaning}
      />
   )
 }


function App() {
  return (
    <>
      <div>
        <h1>
          <span>EmojiPedia</span>
        </h1>
      </div>
      <div className="dictionary">
          {emojipedia.map(CreateEntery)}
      </div>
    </>
  );
}

export default App;
