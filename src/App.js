import './App.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import isValidSudoku from './ValidSudoku';
import solveSudoku from './SudokuSolver'

const particleOptions = {
  
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onclick: {
        enable: true,
        mode: "emitter"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 50
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#fff",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  emitters: {
    direction: "top",
    position: {
      x: 50,
      y: 130
    },
    rate: {
      delay: 0.1
    },
    size: {
      width: 100,
      height: 0
    },
    particles: {
      color: {
        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
      },
      lineLinked: {
        enable: false
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 400,
        random: {
          enable: true,
          minimumValue: 50
        }
      },
      opacity: {
        value: 0.5
      },
      move: {
        speed: 10,
        random: false,
        outMode: "destroy"
      }
    }
  }
}




function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
  <div>
    <div><h1 align="center">Sudoku Solver</h1></div>
  <Particles id="tsparticles" params={particleOptions} init={particlesInit} loaded={particlesLoaded} />
    <div className="App center">
      <table>
        <tr>
          <th><input type="text" name="c1" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c2" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c3" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c4" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c5" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c6" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c7" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c8" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c9" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c10" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c11" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c12" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c13" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c14" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c15" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c16" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c17" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c18" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c19" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c20" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c21" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c22" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c23" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c24" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c25" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c26" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c27" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c28" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c29" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c30" size="1" maxLength="1"></input></th>  
          <th><input type="text" name="c31" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c32" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c33" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c34" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c35" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c36" size="1" maxLength="1"></input></th>  
        </tr>
        <tr>
          <th><input type="text" name="c37" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c38" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c39" size="1" maxLength="1"></input></th> 
          <th><input type="text" name="c40" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c41" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c42" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c43" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c44" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c45" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c46" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c47" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c48" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c49" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c50" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c51" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c52" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c53" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c54" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c55" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c56" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c57" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c58" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c59" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c60" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c61" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c62" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c63" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c64" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c65" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c66" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c67" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c68" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c69" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c70" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c71" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c72" size="1" maxLength="1"></input></th>
        </tr>
        <tr>
          <th><input type="text" name="c73" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c74" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c75" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c76" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c77" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c78" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c79" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c80" size="1" maxLength="1"></input></th>
          <th><input type="text" name="c81" size="1" maxLength="1"></input></th>
        </tr>
      </table>
      <button onClick={solve}>Solve Sudoku</button> <button onClick={clear}>Clear Board</button>
      <h4 name="msg"></h4>
    </div>
  </div>
  );
}

let solution = [[],[],[],[],[],[],[],[],[]]
let arrRow = 0
function clear(){
  let cell = 1
  for (let i=0; i<9;i++){
    for (let j=0; j<9; j++){
      document.querySelector(`[name="c${cell++}"]`).value = ""
    }
  }
  document.querySelector('[name="msg"]').innerHTML = ""
}

function solve(){
  solution = [[],[],[],[],[],[],[],[],[]]
  for (let k=1; k<82; k++){
    let randomVar = document.querySelector(`[name="c${k}"]`).value
    validNum(randomVar)
    if (k%9 === 0)arrRow++
  }
  arrRow = 0
  if (isValidSudoku(solution) === false){
    document.querySelector('[name="msg"]').innerHTML = "This is an invalid starting position"
    return
  }
  solution = solveSudoku(solution)
  for (let i=0; i<9; i++){
    if (solution[i].includes(".")){
      document.querySelector('[name="msg"]').innerHTML = "No possible Sudoku solutions exist for the given board"
      return
    }
  }
  document.querySelector('[name="msg"]').innerHTML = "Sudoku successfully solved"
  let cell = 1
  for (let i=0; i<9;i++){
    for (let j=0; j<9; j++){
      document.querySelector(`[name="c${cell++}"]`).value = solution[i][j]
    }
  }
}

function validNum(num){
  if (num.charCodeAt(0) > 48 && num.charCodeAt(0) < 58){
    solution[arrRow].push(num)
  }
  else solution[arrRow].push(".")
}






export default App;
