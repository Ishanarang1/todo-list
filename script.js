/* General styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f3ec78, #af4261);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #333;
  }
  
  .container {
    background: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #af4261;
    letter-spacing: 1px;
  }
  
  .input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  input {
    width: 70%;
    padding: 12px 15px;
    border: 2px solid #af4261;
    border-radius: 10px;
    outline: none;
    font-size: 1em;
    margin-right: 10px;
    transition: border 0.3s;
  }
  
  input:focus {
    border-color: #f3ec78;
  }
  
  button {
    padding: 12px 20px;
    border: none;
    background: #af4261;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }
  
  button:hover {
    background: #f3ec78;
    transform: translateY(-2px);
  }
  
  /* Task list */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  li:hover {
    transform: translateY(-2px);
  }
  
  li span {
    font-size: 1em;
  }
  
  .delete-button {
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background 0.3s, transform 0.2s;
  }
  
  .delete-button:hover {
    background: #c0392b;
    transform: scale(1.1);
  }
  
