document.addEventListener('DOMContentLoaded', => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay =document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    //The Tetrominos
    const lTetromino  [
        [1, width+1, width+2+1, 2], 
        [width, width+1, width+2+2],
        [1, width+1, width+2+1, width2],
        [width, width+2, width+2+1, width+2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theTetrominos = (lTetromino, zTetromino, tTetromino, oTetromino, iTetromino)

    let currentPosition = 4;
    let current = theTetrominos[0][0]

    //draw the first rotation in the first tetromino

    function draw(squares) {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }
    
    draw()
    
    })