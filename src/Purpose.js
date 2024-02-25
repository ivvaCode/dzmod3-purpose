import { Component } from "react";
import image from './img-1.jpg';

export class Purpose extends Component {
    state = {
        userInput:'',
        allPurpose: [],
        purpose7:'Relax',
    }

    //получаем доступ к тому, что вводит пользователь
    onChangeEvent(event) {
        this.setState({userInput: event})
    console.log(event);
    }
    //кнопка- Добавить
    addItem(input) {
        let listWeek = this.state.allPurpose;
        listWeek.push(input);
    console.log (listWeek);
        this.setState ({allPurpose: listWeek, userInput:'', })
    } 
    
        
    render() {
        return (
       <div className="container">
        <div className='Laptop'>
    
    <img className='image' src={ image } alt="Laptop"/>
    <div className="added">
    <p className="added-1" >"What is your purpose on Monday?"</p>
    </div>

        <div className="Purpose">

            <input className="Input-3" 
            type='text'
            placeholder="What is your purpose on Tuesday?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />
            
            <input className="Input-2" 
            type='text'
            placeholder="What is your purpose on Tuesday?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />

             <input className="Input-3"
            type='text'
            placeholder="What is your purpose on Whensday?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />

            <input className="Input-4"
            type='text'
            placeholder="What is your purpose on 4?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
                />

            <input className="Input-5"
            type='text'
            placeholder="What is your purpose on 5?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />

            <input className="Input-6"
            type='text'
            placeholder="What is your purpose on 6?"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />
        
            <input className="Input-7"
            type='text' 
            placeholder="RELAX"
            onChange = {(event) => {this.onChangeEvent(event.target.value)}}
            />  
            <div className="button-add">
           <button onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
       </div> 
      
       <ul>
        {this.state.listWeek.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      <li ></li>
       </ul>
        </div>

        
       </div>
       </div>
           
    
          



        )
    }
}
