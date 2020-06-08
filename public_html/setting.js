/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 25;



var blocks = [
    [[0, 0, 1, 0], //j
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]],

    [[0, 0, 0, 0], //ㅏ
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0]],

    [[0, 0, 0, 0], //ㅁ
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]],

    [[0, 0, 0, 0], // ㅡ
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],

    [[0, 1, 0, 0], //ㄴ
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]],

    [[0, 0, 0, 0], //2
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]],

    [[0, 0, 0, 0], //s
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]]

];

