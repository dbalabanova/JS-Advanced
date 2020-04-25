const FilmStudio = require('../02. Film Studio_Ресурси/filmStudio');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('filmstudio',function(){
    let filmStudio;
    beforeEach(function(){
        filmStudio= new FilmStudio('SU-Studio')
    })
    // describe('constuctor', function() {
    //     it('if constructor works properly',function(){
    //          filmStudio = new FilmStudio()
    //         expect(filmStudio.name).to.equal(undefined)
    //     })
    //     it('if constructor works properly',function(){
    //         filmStudio = new FilmStudio(undefined)
    //        expect(filmStudio.name).to.equal(undefined)
    //    })
       
    // })
   
    describe('makeMovie',function() {
        it('receive correct input',function(){
             filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            expect(filmStudio.films).to.deep.equal([{ filmName: 'The Avengers',
            filmRoles:
               [ { role: 'Iron-Man', actor: false },
                 { role: 'Thor', actor: false },
                 { role: 'Hulk', actor: false },
                 { role: 'Arrow guy', actor: false } ] }
         ])
        expect(filmStudio.films.length).to.equal(1)

        })
        it('receive same film twice',function(){
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man'])
            expect(filmStudio.films).to.deep.equal([{ filmName: 'The Avengers',
            filmRoles:
               [ { role: 'Iron-Man', actor: false },
                 { role: 'Thor', actor: false },
                 { role: 'Hulk', actor: false },
                 { role: 'Arrow guy', actor: false } ] },
         { filmName: 'The Avengers 2',
            filmRoles:
               [ { role: 'Iron-Man', actor: false },
                 { role: 'Hulk', actor: false },
                 { role: 'Arrow guy', actor: false },
                 { role: 'Ant-man', actor: false } ] }
        ])
        expect(filmStudio.films.length).to.equal(2)
       })
   
       it('receive incorrect input',function(){
       expect(()=>filmStudio.makeMovie('The Avengers')).to.Throw("Invalid arguments")
   })
   it('receive incorrect input',function(){
    expect(()=>filmStudio.makeMovie(['The Avengers'],['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])).to.Throw("Invalid arguments")
})
it('receive incorrect input',function(){
    expect(()=>filmStudio.makeMovie(['The Avengers'],'Iron-Man')).to.Throw("Invalid arguments")
})
    })

    describe('casting',function() {
        it('should have the correct function properties', function () {
        assert.isFunction(FilmStudio.prototype.casting);
        assert.isFunction(FilmStudio.prototype.makeMovie);
        assert.isFunction(FilmStudio.prototype.lookForProducer);
    });
        it('receiving correct input',function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            let actual = filmStudio.casting('Angelina Jolie', 'Iron-Man')
            expect(actual).to.equal(`You got the job! Mr. Angelina Jolie you are next Iron-Man in the The Avengers. Congratz!`)
        })
        it('receiving correct input',function() {
            let actual = filmStudio.casting('Angelina Jolie', 'Iron-Man')
            expect(actual).to.equal(`There are no films yet in SU-Studio.`)
        })
        it('receiving correct input',function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            let actual = filmStudio.casting('Angelina Jolie', 'Cindarella')
            expect(actual).to.equal(
                `Angelina Jolie, we cannot find a Cindarella role...`)
        })
    })

    describe('lookForProducer',function(){
        it('receiving correct input', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            expect(filmStudio.lookForProducer('The Avengers')).to.equal('Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\nfalse as Hulk\nfalse as Arrow guy\n')
        })
        it('receiving incorrect input', function() {
            expect(()=>filmStudio.lookForProducer('The Avengers')).to.Throw(`The Avengers do not exist yet, but we need the money...`)
        })
    })
})