//@ts-nocheck
    db = connect( 'mongodb://app:app@localhost:27017/eventsDb?authSource=admin' );

    db.events.insertMany( [
        {
            fullName: 'ИВАНОВ ИВАН ИВАНОВИЧ',
            isTerr: true,
            birthDate: ISODate('2001-06-29T00:00:00.000Z'),
            address: 'Г. ТОЛЬЯТТИ САМАРСКОЙ ОБЛАСТИ',
            action: 'added',
            date: ISODate('2024-08-03T15:11:38.460Z')
        },
        {
            fullName: 'ВЕРЕМЕЕВ ОЛЕГ ПЕТРОВИЧ',
            isTerr: false,
            birthDate: ISODate('2003-11-14T00:00:00.000Z'),
            address: 'Г. ЛИПЕЦК ЛИПЕЦКОЙ ОБЛАСТИ',
            action: 'added',
            date: ISODate('2024-07-29T11:24:14.460Z')
        },
        {
            fullName: 'КУРБАНОВ АНДРЕЙ БАХТИЕРОВИЧ',
            aliases: [ 'КУРБАНОВ АНДРЕЙ БАХТИЁРОВИЧ' ],
            isTerr: true,
            birthDate: ISODate('1975-06-19T00:00:00.000Z'),
            address: 'Г. ВОЛОГДА',
            action: 'added',
            date: ISODate('2024-07-29T11:24:14.460Z')
        },
        {
            fullName: 'КОЛОБОВ ИВАН АНДРЕЕВИЧ',
            isTerr: true,
            birthDate: ISODate('1998-05-16T00:00:00.000Z'),
            address: 'Г. ЯРОСЛАВЛЬ',
            action: 'removed',
            date: ISODate('2024-08-03T15:11:38.460Z')
        },
        {
            fullName: 'АНТОНОВА МАРИЯ ВЯЧЕСЛАВОВНА',
            isTerr: true,
            birthDate: ISODate('1964-03-11T00:00:00.000Z'),
            address: 'Г. ПУШКИНО МОСКОВСКОЙ ОБЛАСТИ',
            action: 'removed',
            date: ISODate('2024-07-29T11:24:14.460Z')
        },
        {
            fullName: 'МАРАГИН ВЕНИАМИН ДИЕРБЕКОВИЧ',
            aliases: [
                'МАРАГИН ВЕНИАМИН ДИЁРБЕКОВИЧ', 'МАРАГИН ВЕНИАМИН ДИЙОРБЕКОВИЧ'
            ],
            isTerr: false,
            birthDate: ISODate('1982-08-11T00:00:00.000Z'),
            address: 'Г. КРАСНОЯРСК',
            action: 'removed',
            date: ISODate('2024-08-03T15:11:38.460Z')
        },
        {
            fullName: 'МИРЗОЕВ ЗАУР ИСА ОГЛЫ',
            birthDate: ISODate('2002-01-03T00:00:00.000Z'),
            oldAliases: [
              'МИРЗОЕВ ЗАУР ИСА'
            ],
            newAliases: [
              'МИРЗОЕВ ЗАУР ИСА', 'МИРЗОЕВ ЗАУР ИСАЕВИЧ'
            ],
            oldIsTerr: true,
            newIsTerr: true,
            oldAddress: 'ТУЛЬСКАЯ ОБЛАСТЬ',
            newAddress: 'Г. ТУЛА ТУЛЬСКОЙ ОБЛАСТИ',
            action: 'changed',
            date: ISODate('2024-07-29T11:24:14.460Z')
        },
        {
            fullName: 'АНТИПОВА ЛЮДМИЛА СЕРГЕЕВНА',
            birthDate: ISODate('0001-01-01T00:00:00.000Z'), // not specified date in the list of gov body
            oldIsTerr: true,
            newIsTerr: true,
            oldAddress: 'ПОСЕЛОК ВОРОТЫНЕЦ ВОРОТЫНСКОГО РАЙОНА ГОРЬКОВСКОЙ ОБЛАСТИ',
            newAddress: 'П. ВОРОТЫНЕЦ ВОРОТЫНСКОГО РАЙОНА ГОРЬКОВСКОЙ ОБЛАСТИ',
            action: 'changed',
            date: ISODate('2024-07-29T11:24:14.460Z')
        },
        {
            fullName: 'ВЛАСКИН МАТВЕЙ ВАЛЕНТИНОВИЧ',
            birthDate: ISODate('1986-04-24T00:00:00.000Z'),
            oldIsTerr: false,
            newIsTerr: false,
            oldAddress: 'Г. УСТИНОВ',
            newAddress: 'Г. УСТИНОВ УДМУРТСКОЙ РЕСПУБЛИКИ',
            action: 'changed',
            date: ISODate('2024-08-03T15:11:38.460Z')
       }
   ] );

    printjson( db.events.find( {} ) );