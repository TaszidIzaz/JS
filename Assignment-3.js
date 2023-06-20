
//----------        Tasks from 1 to 5 are here in this file. Other Tasks are in their own separate html files     ----------------


//-------------------------1a---------------------------------------


function getDayOfWeek(dateString) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return days[dayOfWeek];
  }



//-------------------------1b------------------------------------

const currDate = new Date();
const currDayOfWeek = getDayOfWeek(currDate.toISOString().slice(0, 10));
console.log(currDayOfWeek);














//-------------------------2a------------------------------------

function calculate(numbers) {
    let sumOfSqrs = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfSqrs += Math.pow(numbers[i], 2);
    }
    return Math.sqrt(sumOfSqrs);
  }

//-------------------------2b------------------------------------

  const numbers = [2, 3, 4, 5];
const squareRootSum = calculate(numbers);
console.log(squareRootSum);










//-------------------------3a------------------------------------

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }


//-------------------------3b------------------------------------

  const number = 17;
const isNumberPrime = isPrime(number);
console.log(isNumberPrime);










//-------------------------4a------------------------------------

function openNewWindow(url, width, height) {
    const options = `width=${width},height=${height}`;
    window.open(url, '_blank', options);
  }

//-------------------------4b------------------------------------


const url = 'https://www.example.com';
const width = 800;
const height = 600;
openNewWindow(url, width, height);












//-------------------------5a------------------------------------

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const browserInfo = {
      name: '',
      version: ''
    };
  
    if (userAgent.indexOf('Firefox') > -1) {
      browserInfo.name = 'Firefox';
      browserInfo.version = userAgent.match(/Firefox\/(\d+)/)[1];
    } else if (userAgent.indexOf('Chrome') > -1) {
      browserInfo.name = 'Chrome';
      browserInfo.version = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.indexOf('Safari') > -1) {
      browserInfo.name = 'Safari';
      browserInfo.version = userAgent.match(/Version\/(\d+)/)[1];
    } else if (userAgent.indexOf('Opera') > -1) {
      browserInfo.name = 'Opera';
      browserInfo.version = userAgent.match(/OPR\/(\d+)/)[1];
    } else if (userAgent.indexOf('Edge') > -1) {
      browserInfo.name = 'Edge';
      browserInfo.version = userAgent.match(/Edge\/(\d+)/)[1];
    } else if (userAgent.indexOf('MSIE') > -1) {
      browserInfo.name = 'Internet Explorer';
      browserInfo.version = userAgent.match(/MSIE (\d+)/)[1];
    }
  
    return browserInfo;
  }
  
//-------------------------5b------------------------------------

const browserInfo = getBrowserInfo();
console.log(`Browser Name: ${browserInfo.name}`);
console.log(`Browser Version: ${browserInfo.version}`);

