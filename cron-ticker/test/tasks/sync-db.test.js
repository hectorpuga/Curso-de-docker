const { syncDB } = require("../../tasks/sync-db")


describe('Pruebas en Sync-DB', () => { 

    test('debe de ejcutar el proceso 2 veces', () => { 

        const times=syncDB();
        console.log('Se llamo ', times);

        expect(times).toBe(1);

     })

 })