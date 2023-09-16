import logoImg from './../Img/Lable.svg'  
import  "./header.css"
import React from 'react';

function Header ()  {




    

   
    
    return <header className="header">

        <div class="header">
            <div class="container">
                <div class="header_logo"></div>
                <div class="header_row">
                    <img src={logoImg} alt='Lable'/>
                   <span >Компания</span>
                   <div className='BTN'>Его можно покрутить</div>
                   
                <div className ='Nav'>
                    
                    <span >Услуги </span>
                    <span >Контакты </span>
                    <span >О нас </span>
                    <span >Профиль </span>
                    
                <button>
                    
                </button>
                    
                   <span></span>
                    
                    </div>
                        
                    </div> 
                    
                </div>
                
                
                <div class="header_nav">
               <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ratione dolorum eligendi culpa vel nemo obcaecati ullam provident assumenda natus blanditiis enim recusandae, animi voluptatem temporibus nobis praesentium repellendus fugit!
                </span>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ratione dolorum eligendi culpa vel nemo obcaecati ullam provident assumenda natus blanditiis enim recusandae, animi voluptatem temporibus nobis praesentium repellendus fugit!
                </span>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ratione dolorum eligendi culpa vel nemo obcaecati ullam provident assumenda natus blanditiis enim recusandae, animi voluptatem temporibus nobis praesentium repellendus fugit!
                </span>

                
                </div>
            
        </div>
        
    </header>

}

export default Header;