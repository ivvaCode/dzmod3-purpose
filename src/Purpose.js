import { Component } from "react";
import image from './img-1.jpg';
import icon from './icon.png';

export class Purpose extends Component {
    state = {
        userInput:'',
        allPurpose: []
    }

    //получаем доступ к тому, что вводит пользователь
    onChangeEvent(event) {
        this.setState({userInput: event})
    //console.log(event);
    }
   
    //кнопка- Добавить
    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        } else {
    //получим доступ к массиву списка
        let listWeek = this.state.allPurpose;
        listWeek.push(input);
        this.setState ({allPurpose: listWeek, userInput: '' })
       //console.log (listWeek);
    }} 
 //кнопка- Удалить
    deleteItem() {
        let listWeek = this.state.allPurpose;
        listWeek = [];
        this.setState ({allPurpose: listWeek})
    }

   //перечеркиваем пункт списка, ставим подслушку на событие event c пом. event.target
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
         
    render() {
        return (
<div className="container">
    <div className='Laptop'>
    
      <img className='image' src={ image } alt="Laptop"/>
    
        <div className="Purpose">

            <input className="Input" 
            type='text'
            placeholder="What do you need to do?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />
            <div className="Btn">
           <button className="BtnAdd" onClick={() => this.addItem(this.state.userInput)}>Add</button>
       </div>

       <ul>
        {this.state.allPurpose.map((item, index) => (   
            <li onClick = {this.crossedWord} key = {index}>
              <img classList = 'icon' src= {icon} width='30px' alt="barbara"></img>  
                {item} </li> 
        ))}
        </ul> 
            
        <div className="Btn">
            <button  className="BtnDel" onClick={() => this.deleteItem()}>Delete</button>
        </div> 
    </div>
                   
</div> 
</div> 
          
)}}





            
       

    
       
      
      
           
    