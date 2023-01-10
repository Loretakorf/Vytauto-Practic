
function add(a /* 10 */, b /* 12 */) {
     console.log(a + b); // log 22} 
     function useCallback(callback /* add */, a /* 10 */, b /* 12 */) { 
        console.log("before callback");
         callback(a, b); // 10, 12 
         console.log("after callback");
        } 
         useCallback(add, 10, 12);// log "before callback"// log 22// log "after callback"
          const subtract = (a, b) => { console.log(a - b);}; 
          useCallback(subtract, 55, 5);// log "before callback"// log 50// log "after callback" 
          useCallback( function (a, b) { 
              console.log(a);   console.log(b);
            }, "hello", "world");
        }



// examples

const time = 10;
const timeString = time < 10 ? `0${time}` : time;

let answer = 0;

if (time < 10) {
answer = `0${time}`;
} else if (time > 60) {
answer = time % 60;
} else {
 answer = time;
}
const age = 17;
let votingText = age < 18 ? 'You are unable to vote yet' : 'Yre are welcome to vote!';
const login = "Director"
const message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'greeting' : login == "" ? "No login" : "";
console.log(message);

// ternary expression

// if time < 10 ? `0${time}` : if time > 60 ? time % 60 : time

const answer1 = time < 10 ? `0${time}` : time > 60 ? time % 60 : time;

/**
* ? - nurodo kad buvo parašyta sąlyga
* : - atskiria vertę if true nuo vertės if false formatu:
* <true> : <false>
*
* <condition|boolean> ? <true value> : <false value>
* <condition|boolean> ? <true value> : <condition|boolean> ? <second true value> : <false value>
*/

//export const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);
