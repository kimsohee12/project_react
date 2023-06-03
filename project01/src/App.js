import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';
//1.박스 두개(타이틀,사진,결과값)
//2.가위 바위 보 버튼
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3과 4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록,지면 빨강 비기면 검 검은색)
const choice ={
  rock:{
    name : "Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissors:{
    name : "Scissors",
    img: "https://hbw.ph/wp-content/uploads/2017/10/scissors-Y57052B.jpg"
  },
  paper:{
    name : "Paper",
    img:"https://m.media-amazon.com/images/I/61HZTvBvUvL.jpg"

  }
}
function App() {
  const [userSelect, setUserSelect] = useState(choice['rock'])
  const [computerSelect, setComputerSelect] = useState(choice['rock'])
  const [userResult, setUserResult] = useState("")
  const [comResult, setComResult] = useState("")
  const [borderColor, setBorderColor] = useState("")
  
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setUserResult(userJudgement(choice[userChoice],computerChoice))
    setComResult(comJudgement(choice[userChoice],computerChoice))
  
      if (userResult === 'Win') {
        setBorderColor('green');
      } else if (userResult === 'Lose') {
       setBorderColor ('red');
      } else {
        setBorderColor ("black");
      }
    
    
  };
  
  const randomChoice=()=>{
    let itemArray = Object.keys(choice)//객체에 key 값만 뽑아서 어레이로 만들어주는 함수
    let randomItem =  Math.floor(Math.random()*itemArray.length)
    console.log(randomItem);
    let final = itemArray[randomItem]
   console.log(final);
   return choice[final]
  }
  
  const userJudgement=(user,computer)=>{
    console.log("user",user,"com",computer);
    if(user.name==computer.name){
      return "tie"
    }else if(user.name=="Rock"){
      return computer.name =="Scissors"?"Win":"Lose"
    }else if(user.name=="Scissors"){
      return computer.name =="Paper"?"Win":"Lose"
    }else if(user.name=="Paper"){
      return computer.name =="Rock"?"Win":"Lose"
    }
    
  }
  const comJudgement=(user,computer)=>{
    console.log("user",user,"com",computer);
    if(user.name==computer.name){
      return "tie"
    }else if(computer.name=="Rock"){
      return user.name =="Scissors"?"Win":"Lose"
    }else if(computer.name=="Scissors"){
      return user.name =="Paper"?"Win":"Lose"
    }else if(computer.name=="Paper"){
      return user.name =="Rock"?"Win":"Lose"
    }
    
  }
  return (
    
    <div>

        borderColor = 'black';
      <div className='main' style={{borderColor}}>
        <Box title ="You" item={userSelect} result ={userResult}/>
        <Box title = "Computer"item = {computerSelect} result ={comResult}/>
      </div>

      <div className='main'>
        <button onClick={()=>play('scissors')}>✌️</button>
        <button onClick={()=>play('rock')}>✊ </button>
        <button onClick={()=>play('paper')}>🖐️</button>
      </div>

    </div>
  );
}

export default App;
