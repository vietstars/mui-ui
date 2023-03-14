import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { 
  AuthProvider,
  SettingsProvider
} from 'contexts';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

let user = localStorage.getItem("user");

const fakeUser = {
  date: new Date(),
  email: "huybinh-thai@am-bition.vn",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUzMGUxOGQ2YWQ0Yzc2MmNjZGYzM2UiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAYXBwc2VlZC51cyIsInBhc3N3b3JkIjoiJDJhJDEwJHFZNkpDMzgvTnZ4WFp6cjRaN1NUOS5EUlFIU1g4RXVWclFNZUlvY1lvd0hueXVkZDlMQmEuIiwiZGF0ZSI6IjIwMjEtMDctMDVUMTM6NTA6MTYuNDE5WiIsIl9fdiI6MCwiaWF0IjoxNjc4MjQ5MTIwLCJleHAiOjE2NzgzMzU1MjB9.uDopQjO9wAxcd-Gjv4uvp0gjDtkZWbsZPXR4nC6LTi8",
  username: "Ben Thai",
  __v: 0,
  _id: "60e30e18d6ad4c762ccdf33e",
};

user = JSON.parse(user) || fakeUser;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider userData={user}>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
