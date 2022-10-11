import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))

const btn = document.getElementById('submit__button');

btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Sending Message...';
    btn.style.opacity = '0.3';
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.textContent = 'Send Message!';
         }, 4500);
  });

// btn.addEventListener('mouseleave', (event) => {
//     btn.textContent = 'Send Message!';
// });



