import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
    render() {
        return (
            <div className='progressBar'>
                <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div> 
            </div>
        );
    }
}
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
export default ProgressBar;