import React from 'react';
import './App.css';

function App() {
  return (
    <div>
    <h3>This is what you would do when you don't feel like working on your project...</h3>
    <img id="bg" src="https://cdn1.imggmi.com/uploads/2019/9/18/6fd495bae71dccce8bc6f39e6c07e216-full.jpg" alt="background"/>
    <p id="title"> When not feeling like working, we tend to check our WeChat.</p>
    <div class="slack">
    <div id="user" >
      <img src="https://cdn1.imggmi.com/uploads/2019/9/18/f4f197f87f86fe3aa253da71d070d546-full.jpg" alt="bored"/>
        <p> <b>User:</b>You feel bored and want to get connected to people.</p>
    </div>
    <div id="interface"  ><img src="https://cdn1.imggmi.com/uploads/2019/9/18/e2b437082cd1bf35f4ec99cf27c99c3a-full.jpg" alt="chatting"/>
        <p><b>Interface:</b> it is so easy to type in and chat wtih people through clear interface.</p>
    </div>
    <div id="address">
        <img src="https://cdn1.imggmi.com/uploads/2019/9/18/d4b6fd7790561d500bcd484137727778-full.jpg" alt="WiFi status" />
        <p><b>Address:</b> you have Wi-Fi and 4G almost everywhere.</p></div>
    <div id="city" >
        <img src="https://cdn1.imggmi.com/uploads/2019/9/18/b74574dc895f7a9db216f282252a60ab-full.jpg" alt="WiFi speed"/>
        <p><b>City:</b> the speed is sooo fast that things updates within seconds.</p>
        </div>
    <div id="cloud"><img src="https://cdn1.imggmi.com/uploads/2019/9/18/4abf006d619d7f42435e172ad53fbb4d-full.jpg" alt="wechat moments"/>
        <p><b>Cloud:</b> can keep scroll down your WeChat moment to see what others are doing.</p>
    </div>
    <div id="earth" >
        <img src="https://cdn1.imggmi.com/uploads/2019/9/18/fd671a9ad10a69df415577bea56bc70e-full.jpg" alt="map"/>
        <p><b>Earth:</b> keep you connected to people miles away and stay away from work.</p></div>
  </div>
  
</div>
  );
}

export default App;