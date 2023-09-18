/*Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type "words"...

The screen "keyboard" layout looks like this

a	b	c	d	e	1	2	3
f	g	h	i	j	4	5	6
k	l	m	n	o	7	8	9
p	q	r	s	t	.	@	0
u	v	w	x	y	z	_	/
Kata task
How many button presses on my remote are required to type a given word?

Notes
The cursor always starts on the letter a (top left)
Remember to also press OK to "accept" each character.
Take a direct route from one character to the next
The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
Example
word = codewars

c => a-b-c-OK = 3
o => c-d-e-j-o-OK = 5
d => o-j-e-d-OK = 4
e => d-e-OK = 2
w => e-j-o-t-y-x-w-OK = 7
a => w-r-m-h-c-b-a-OK = 7
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

*/

const keyboard = [['a','b','c','d','e','1','2','3'],
                ['f','g','h','i','j','4','5','6'],
                ['k','l','m','n','o','7','8','9'],
                ['p','q','r','s','t','.','@','0'],
                ['u','v','w','x','y','z','_','/']
                ]

const mapa = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
                ]


//movimientos posibles i++,i--,j++,j--

function Busqueda(X,Y,voc,visitados){
    var pasos = 0;
    if(keyboard[X][Y] == voc)
        return pasos;
    else{
        var p1 = Number.MAX_SAFE_INTEGER 
        var p2 = Number.MAX_SAFE_INTEGER
        var p3 = Number.MAX_SAFE_INTEGER
        var p4 = Number.MAX_SAFE_INTEGER

        visitados[X][Y] = 1

        if(X < 6 && visitados[X++][Y] == 0)
            //derecha
            p1 = Busqueda(X++,Y,voc,visitados);
        if(X > 0 && visitados[X--][Y] == 0)
            //izquierda
            p2 = Busqueda(X--,Y,voc,visitados);
        if(Y < 4 && visitados[X][Y++] == 0)
            //abajo
            p3 = Busqueda(X,Y++,voc,visitados);
        if(Y > 0 && visitados[X][Y--] == 0)
            //arriba
            p4 = Busqueda(X,Y--,voc,visitados);
        
        return Math.min(p1,p2,p3,p4)
    }


}

var tvRemote = function(word) {
  // Your code here
  var pasos = Number.MAX_SAFE_INTEGER;

  word.split().forEach(voc => {
    var visitados = mapa;
    pasos = Busqueda(0,0,voc,visitados);
  });
  return pasos;
}



console.log(tvRemote("does"), 16);
console.log(tvRemote("your"), 23);
console.log(tvRemote("solution"), 33);
console.log(tvRemote("work"), 20);
console.log(tvRemote("for"), 12);
console.log(tvRemote("these"), 27);
console.log(tvRemote("words"), 25);