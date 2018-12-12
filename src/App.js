import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hey This is Tarsem Jngra</h1>
        <div>
        This is my first <strong>Application</strong>
        </div>
        <div>
        <h1>Application form</h1>
        </div>
         <div>
         <img src="C:\Users\User\Desktop\lucky\luckypic.jpg" />
         </div>
         <div>
         <form>
               <fieldset>
          <legend><strong>Personal Information*</strong></legend>
        Enter First Name*:
        <input type="text" name="firstname" value=""/><br/><br/>
        Enter Last Name:
        <input type="text" name="lastname" value=""/><br/><br/>
        Enter Father Name*:
        <input type="text" name="fathername" value=""/><br/><br/>
        Enter Mother Name*:
        <input type="text" name="mothername" value=""/><br/><br/>
        Select Gender*:<br/>
        <input type="radio" name="Gender" value="Male" />Male<br/>
        <input type="radio" name="Gender" value="female" />female<br/>
        <input type="radio" name="Gender" value="other" />Other<br/>
        <br/><br/>
        DOB*<input type="date" name="dateofbrth"/>
        </fieldset>
        <fieldset>
          <legend><strong>Eduction Detail*</strong></legend>
          10th matriculation*<table>
          <tr>
            <th>Board/University</th>
            <th>Passing Year</th>
            <th>Marks</th>
            <th>Division</th>
          </tr>
          <tr>
            <td><input type="text" name="board/University"/></td>
            <td><input type="number" name="Passing Year"/></td>
            <td><input type="number" name="Marks"/></td>
            <td><select>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
            </select>
            </td>
          </tr>

          </table>
          <br/><br/>
          12th/Diploma* <table>
          <tr>
            <th>Board/University</th>
            <th>Passing Year</th>
            <th>Marks</th>
            <th>Division</th>
          </tr>
          <tr>
            <td><input type="text" name="board/University"/></td>
            <td><input type="number" name="Passing Year"/></td>
            <td><input type="number" name="Marks"/></td>
            <td><select>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
            </select>
            </td>
          </tr>

          </table>
          <br/><br/>
          Graduation*<table>
          <tr>
            <th>Board/University</th>
            <th>Passing Year</th>
            <th>Marks</th>
            <th>Division</th>
          </tr>
          <tr>
            <td><input type="text" name="board/University"/></td>
            <td><input type="number" name="Passing Year"/></td>
            <td><input type="number" name="Marks"/></td>
            <td><select>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
            </select>
            </td>
          </tr>

          </table>
          PG<table>
          <tr>
            <th>Board/University</th>
            <th>Passing Year</th>
            <th>Marks</th>
            <th>Division</th>
          </tr>
          <tr>
            <td><input type="text" name="board/University"/></td>
            <td><input type="number" name="Passing Year"/></td>
            <td><input type="number" name="Marks"/></td>
            <td><select>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
            </select>
            </td>
          </tr>

          </table>
        </fieldset>
        <fieldset>
          <legend><strong>Address*</strong></legend>
            Address Line1*:<input type="text" name=""/><br/>
            Address line2:<input type="text" name=""/><br/><br/>
            State*<select>
              <option value="Haryana">Haryana</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Uter Pardesh">Uter Pardesh</option>
              <option value="Himachal Pardesh">Himachal Pardesh</option>
              <option value="Punjab">Punjab</option>
            </select> 
            City*<select>
              <option value="Fatehabad">Fatehabad</option>
          <option value="Sirsa">Sirsa</option>
          <option value="Hisar" selected>Hisar</option>
          <option value="Hansi">Hansi</option>
          <option value="Rohatk">Rohatk</option>
            </select> <br/>
            Phone No*:<input type="number" name="phonenumber"/><br/>
            Emai Id*:<input type="text" name="emailid"/><br/>
        </fieldset>
        <input type="submit" name="submit"/>
         </form>
         </div>
      </div>
    );
  }
}
export default App;
