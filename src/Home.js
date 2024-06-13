import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

const Home = () => {
    
    let name = 'abc';

  const cars = ['Tata', 'Maruti', 'Honda', 'Hyundai'];

  const status = true;
  const showhide = true;

  return (
    <Fragment>
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nagarro</h2>





          <div>
            <div>Name - {name}</div>
            <div>Numbers - {5 + 3}</div>

          </div>



          <div>
            <h2>Names of Car Companies :-</h2>
            <ul>

              {
                cars.map((item) => (
                  <li>{item}</li>
                ))
              }

              {/* render table */}



            </ul>
          </div>


          {
            status && (
              <>
                <h4>Status is True</h4>
                <h3>awef</h3>
                </>
            )
          }


          {
            showhide ? (
              <>
              <h5>Data - Show</h5>
              </>
            ) : (
              <>
              <h5>Data - Hide</h5>
              </>
            )
          }




        </header>

      <div>
        abc
      </div>
    </Fragment>
  );
}


export default Home



// if - &&
// if else - Ternary Operator


// function sum() {
//   let a = 5;

//   return a;
//   let b = 6;
//   return a;
// }

// sum()


// .classa .innerclassa
// .classa > .innerclassa
