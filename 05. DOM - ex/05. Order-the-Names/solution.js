function solve() {
    let db = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: ['Nixon'],
        O: [],
        P: ['Peterson'],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
    };
    let dbnum = {
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12,
        M:13,
        N:14,
        O:15,
        P:16,
        Q:17,
        R:18,
        S:19,
        T:20,
        U:21,
        V:22,
        W:23,
        X:24,
        Y:25,
        Z:26
    };
    document.querySelector('#exercise button').addEventListener('click', function addName() {
        let name = document.querySelector('#exercise input').value;
        let correctWriting=name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        let firstLetter=correctWriting.charAt(0);
        //debugger
        db[firstLetter].push(correctWriting);
        //console.log(firstLetter);
       // console.log(db);

        let listedItems =document.querySelectorAll('ol li')
        listedItems[dbnum[firstLetter]-1].textContent=db[firstLetter].join(', ')
        //console.log(listedItems[dbnum['R']]);
        
    })
}