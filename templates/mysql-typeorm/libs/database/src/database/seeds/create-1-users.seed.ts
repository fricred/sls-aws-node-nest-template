import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../entities/user.entity';

export default class CreateUser implements Seeder {
  status = [
    {
      id: 31,
      sub_cognito_id: 'B0011BDF-EF58-5673-A385-AE9A9EC9B049',
      name: 'Fletcher Atkins',
      phone: '1-976-892-7044',
      email: 'ultricies.ornare@yahoo.com',
      pay_rate: 25,
      home_address: '5149 Lectus St.',
      created_at: '2021-09-08T05:00:00.000Z',
      creator_user_id: '1580A5CD-5DE1-E7C1-941D-F89AD87923F7',
      updated_at: '2022-01-30T05:00:00.000Z',
      modifier_user_id: '01C192B1-E1FA-2D66-7118-B7A19487D765',
      date_invited: '2022-03-20T21:55:56.000Z',
      date_registered: '2022-01-15T08:55:26.000Z',
      last_login: '2022-09-17T07:20:10.000Z',
      status_id: 1,
      type_id: 10,
    },
    {
      id: 32,
      sub_cognito_id: '4B2BAA86-8D79-E24D-82DB-33961C12BEE9',
      name: 'Karleigh Mayo',
      phone: '(281) 321-5172',
      email: 'dapibus@google.couk',
      pay_rate: 26,
      home_address: '4596 Nec Rd.',
      created_at: '2021-12-24T05:00:00.000Z',
      creator_user_id: 'D3277383-C466-7D1F-9CF0-F8AB73BECD80',
      updated_at: '2022-08-24T05:00:00.000Z',
      modifier_user_id: '1226C2B3-6E22-D02D-8AD3-7ED7740509F9',
      date_invited: '2021-04-15T21:35:37.000Z',
      date_registered: '2023-01-05T22:55:48.000Z',
      last_login: '2022-03-19T16:16:12.000Z',
      status_id: 3,
      type_id: 3,
    },
    {
      id: 33,
      sub_cognito_id: '19E6684C-47A5-F824-BECC-076C9C327389',
      name: 'Lareina Oneal',
      phone: '1-561-586-1658',
      email: 'dictum@icloud.couk',
      pay_rate: 30,
      home_address: 'Ap #701-1012 Sollicitudin Street',
      created_at: '2021-11-18T05:00:00.000Z',
      creator_user_id: '256363C4-94C5-F194-4659-95717B5CB73D',
      updated_at: '2021-05-15T05:00:00.000Z',
      modifier_user_id: 'CC48B80E-CF29-8C48-129C-77D247AFCEEB',
      date_invited: '2021-10-31T00:38:41.000Z',
      date_registered: '2022-03-17T00:54:53.000Z',
      last_login: '2021-10-27T22:19:29.000Z',
      status_id: 10,
      type_id: 4,
    },
    {
      id: 34,
      sub_cognito_id: '2296AD94-7128-A0E8-6C38-58417F7A936D',
      name: 'Judith Hays',
      phone: '1-331-103-1844',
      email: 'nascetur.ridiculus@protonmail.edu',
      pay_rate: 39,
      home_address: 'Ap #501-2895 Eu St.',
      created_at: '2022-12-22T05:00:00.000Z',
      creator_user_id: 'AC477966-EBC5-B271-ADCA-F1DBA6FB1889',
      updated_at: '2022-07-12T05:00:00.000Z',
      modifier_user_id: '7CAA9EF1-B865-A533-5E63-EF11B35CEB37',
      date_invited: '2021-04-20T06:33:01.000Z',
      date_registered: '2021-03-24T07:38:56.000Z',
      last_login: '2022-08-16T19:33:02.000Z',
      status_id: 4,
      type_id: 4,
    },
    {
      id: 35,
      sub_cognito_id: '6EF362C6-0B72-6617-790B-20B42C9A2050',
      name: 'Dennis Petersen',
      phone: '1-645-588-0787',
      email: 'libero@yahoo.com',
      pay_rate: 26,
      home_address: '212-6503 Vel, St.',
      created_at: '2022-02-04T05:00:00.000Z',
      creator_user_id: '6D69C8C8-1424-9274-EFD1-B7AD1E13B424',
      updated_at: '2021-08-01T05:00:00.000Z',
      modifier_user_id: 'EE4C604D-AE94-03D1-F12E-9DB186CB41A5',
      date_invited: '2022-12-23T23:38:13.000Z',
      date_registered: '2022-06-17T14:03:01.000Z',
      last_login: '2021-04-16T21:52:03.000Z',
      status_id: 4,
      type_id: 5,
    },
    {
      id: 36,
      sub_cognito_id: '33FEDC45-46B1-A2D9-AB2D-39245EE78218',
      name: 'Wilma Burgess',
      phone: '1-379-743-9785',
      email: 'est.vitae@yahoo.ca',
      pay_rate: 23,
      home_address: '528-7853 Vestibulum, St.',
      created_at: '2022-10-19T05:00:00.000Z',
      creator_user_id: '566E3344-4242-EE01-C949-5486A86DB4D3',
      updated_at: '2021-07-14T05:00:00.000Z',
      modifier_user_id: 'FA8C39CE-4042-1951-9BD4-297507596855',
      date_invited: '2022-12-15T22:28:13.000Z',
      date_registered: '2022-01-25T11:25:38.000Z',
      last_login: '2021-07-08T11:28:24.000Z',
      status_id: 4,
      type_id: 6,
    },
    {
      id: 37,
      sub_cognito_id: '8E830B68-CAA6-408B-109C-BFA8A432C27B',
      name: 'Carl Tyson',
      phone: '1-637-688-1026',
      email: 'aliquam.fringilla.cursus@google.couk',
      pay_rate: 35,
      home_address: 'Ap #590-899 Vitae, Road',
      created_at: '2021-10-06T05:00:00.000Z',
      creator_user_id: '42D7EDB8-D588-7459-52F8-C8648B2A4C7F',
      updated_at: '2022-06-09T05:00:00.000Z',
      modifier_user_id: '705CC4CE-EDDB-74BF-85D8-72D5F1C8323B',
      date_invited: '2022-08-03T01:34:50.000Z',
      date_registered: '2021-07-25T17:21:19.000Z',
      last_login: '2022-01-16T08:43:47.000Z',
      status_id: 4,
      type_id: 8,
    },
    {
      id: 38,
      sub_cognito_id: '557FB4E1-7899-E7A6-1A12-C7D512726FFC',
      name: 'Ava Mclean',
      phone: '1-323-156-7036',
      email: 'neque@aol.net',
      pay_rate: 28,
      home_address: '167-1159 Nec, St.',
      created_at: '2022-02-21T05:00:00.000Z',
      creator_user_id: 'E8544FAC-812B-50A1-7855-5783E6ECE8D5',
      updated_at: '2022-02-11T05:00:00.000Z',
      modifier_user_id: '9560BBD3-B6EA-E1A7-718B-17782717CC54',
      date_invited: '2022-02-11T13:14:29.000Z',
      date_registered: '2022-01-29T11:22:59.000Z',
      last_login: '2022-04-21T14:53:01.000Z',
      status_id: 4,
      type_id: 3,
    },
    {
      id: 39,
      sub_cognito_id: '411920E5-97B3-D751-9DEA-1376614AA3BC',
      name: 'Chava William',
      phone: '(366) 755-7549',
      email: 'libero.dui@protonmail.edu',
      pay_rate: 21,
      home_address: 'Ap #912-2042 Molestie St.',
      created_at: '2022-11-13T05:00:00.000Z',
      creator_user_id: '87341D78-4DC1-CCB1-B5D8-A0D886E3075C',
      updated_at: '2021-05-18T05:00:00.000Z',
      modifier_user_id: '5A851031-B380-4984-FC90-A6DC42B63E8D',
      date_invited: '2021-07-01T04:20:56.000Z',
      date_registered: '2021-03-11T03:08:12.000Z',
      last_login: '2021-11-30T03:48:48.000Z',
      status_id: 1,
      type_id: 3,
    },
    {
      id: 40,
      sub_cognito_id: '6EED7041-B6CC-723D-994C-E373448D9A9B',
      name: 'Nicole Berry',
      phone: '1-325-576-8061',
      email: 'volutpat.nunc.sit@icloud.couk',
      pay_rate: 22,
      home_address: '7053 Pharetra. Ave',
      created_at: '2021-07-21T05:00:00.000Z',
      creator_user_id: 'D8E651A3-50BB-6B17-8A4C-A0EE4C7CD991',
      updated_at: '2022-07-14T05:00:00.000Z',
      modifier_user_id: '7219D7F2-39A7-33B6-A72F-8957A9DCA904',
      date_invited: '2022-01-02T17:48:19.000Z',
      date_registered: '2022-01-30T06:45:47.000Z',
      last_login: '2021-03-27T23:22:07.000Z',
      status_id: 9,
      type_id: 3,
    },
    {
      id: 41,
      sub_cognito_id: '48898E55-F1BE-F204-9D15-B16F468BFBCE',
      name: 'Ciaran Day',
      phone: '1-546-652-1843',
      email: 'convallis.in@aol.couk',
      pay_rate: 36,
      home_address: '694-1430 Vehicula St.',
      created_at: '2021-12-07T05:00:00.000Z',
      creator_user_id: 'D4EAEA45-77FB-41E3-78C9-4972BB3C8444',
      updated_at: '2022-01-22T05:00:00.000Z',
      modifier_user_id: '6623F968-4259-9FD2-A7C1-6BC8A15DEEAB',
      date_invited: '2022-06-13T19:15:57.000Z',
      date_registered: '2022-07-03T22:26:32.000Z',
      last_login: '2022-04-10T19:04:06.000Z',
      status_id: 1,
      type_id: 3,
    },
    {
      id: 42,
      sub_cognito_id: '72A14E26-4A15-BE92-7BBB-59BBAA69DC02',
      name: 'Thor Rhodes',
      phone: '1-646-391-5782',
      email: 'nec.imperdiet@protonmail.net',
      pay_rate: 34,
      home_address: 'Ap #136-859 Ut, Road',
      created_at: '2022-03-31T05:00:00.000Z',
      creator_user_id: 'CE115A36-D2A3-47DD-7D4A-7A6634E554BE',
      updated_at: '2022-01-06T05:00:00.000Z',
      modifier_user_id: 'CEFE9265-4CA5-EBE1-AF93-A8667D4C4159',
      date_invited: '2021-10-20T12:38:39.000Z',
      date_registered: '2023-01-18T15:08:10.000Z',
      last_login: '2021-10-05T02:05:41.000Z',
      status_id: 7,
      type_id: 4,
    },
    {
      id: 43,
      sub_cognito_id: 'C9EEA6F4-7A4C-E015-BB37-62C7234C5AB6',
      name: 'Alexa Le',
      phone: '1-825-972-8611',
      email: 'quis.arcu@outlook.com',
      pay_rate: 34,
      home_address: 'Ap #560-2887 In, Av.',
      created_at: '2023-02-13T05:00:00.000Z',
      creator_user_id: '4AC9DA75-E016-7602-5C66-EDD19B8652E6',
      updated_at: '2021-12-20T05:00:00.000Z',
      modifier_user_id: '224C2E54-4260-38B3-13F0-CE547A996A57',
      date_invited: '2022-02-10T15:33:48.000Z',
      date_registered: '2022-11-29T06:30:46.000Z',
      last_login: '2022-07-12T04:05:47.000Z',
      status_id: 9,
      type_id: 3,
    },
    {
      id: 44,
      sub_cognito_id: '983D6694-FC42-3E3C-1B9E-6BB50ED139FE',
      name: 'Hasad Bernard',
      phone: '(269) 513-3236',
      email: 'donec.egestas@aol.edu',
      pay_rate: 30,
      home_address: 'Ap #625-8152 Mauris St.',
      created_at: '2022-02-14T05:00:00.000Z',
      creator_user_id: 'ECC8A8CE-8680-06D1-F55F-ED67B49B62D2',
      updated_at: '2023-01-18T05:00:00.000Z',
      modifier_user_id: '1846A289-C32F-AE1D-D265-0A886BB8161C',
      date_invited: '2021-07-30T01:42:53.000Z',
      date_registered: '2021-05-03T02:52:45.000Z',
      last_login: '2021-03-17T13:44:29.000Z',
      status_id: 2,
      type_id: 3,
    },
    {
      id: 45,
      sub_cognito_id: '162DF3CC-A097-1E86-0A3B-D2ABB00AF5F1',
      name: 'Solomon Pace',
      phone: '(886) 641-8453',
      email: 'convallis.est@aol.couk',
      pay_rate: 34,
      home_address: '235-2925 Commodo Road',
      created_at: '2021-05-09T05:00:00.000Z',
      creator_user_id: '1414EFBC-87BB-F77C-5C42-59ADDECF1B07',
      updated_at: '2022-05-27T05:00:00.000Z',
      modifier_user_id: '65138D3E-6A14-2DD9-D852-A2D17EDEBCD4',
      date_invited: '2022-01-30T17:39:05.000Z',
      date_registered: '2021-08-14T04:11:34.000Z',
      last_login: '2022-06-25T03:26:14.000Z',
      status_id: 2,
      type_id: 2,
    },
    {
      id: 46,
      sub_cognito_id: '0982EC6E-7F51-823B-A999-8264BC7886CD',
      name: 'Luke Spencer',
      phone: '1-713-547-9475',
      email: 'a@icloud.net',
      pay_rate: 37,
      home_address: '630-3277 A Street',
      created_at: '2022-09-03T05:00:00.000Z',
      creator_user_id: '9452F908-F736-6489-538D-C78832975817',
      updated_at: '2021-04-20T05:00:00.000Z',
      modifier_user_id: 'ABABD764-9AF7-19C9-9268-67CEE225A071',
      date_invited: '2022-07-18T20:25:16.000Z',
      date_registered: '2021-05-23T04:37:24.000Z',
      last_login: '2022-02-25T01:27:35.000Z',
      status_id: 3,
      type_id: 4,
    },
    {
      id: 47,
      sub_cognito_id: '25A59EEB-7FE9-422B-BD97-CDB88DF658B3',
      name: 'Lilah Weber',
      phone: '1-377-326-1116',
      email: 'sed@outlook.ca',
      pay_rate: 23,
      home_address: '3514 Malesuada Rd.',
      created_at: '2022-05-15T05:00:00.000Z',
      creator_user_id: 'EA475695-D18C-82F4-673D-3E83DC46D6FC',
      updated_at: '2023-03-02T05:00:00.000Z',
      modifier_user_id: '1B5667AB-1113-7967-ABD7-F7B8267B9650',
      date_invited: '2023-02-16T09:31:18.000Z',
      date_registered: '2021-06-06T17:33:05.000Z',
      last_login: '2021-09-14T09:37:47.000Z',
      status_id: 10,
      type_id: 1,
    },
    {
      id: 48,
      sub_cognito_id: '6ED93572-A2A4-43DA-61B1-D7762853573D',
      name: 'Katell Estrada',
      phone: '(162) 845-9926',
      email: 'in.aliquet@outlook.edu',
      pay_rate: 35,
      home_address: 'P.O. Box 133, 3620 Tristique Street',
      created_at: '2023-02-10T05:00:00.000Z',
      creator_user_id: '16C2FDDC-C1E6-B172-4601-8B4D97702526',
      updated_at: '2021-05-20T05:00:00.000Z',
      modifier_user_id: '68D42123-4B62-253F-7CA6-18FEE8EE8D5D',
      date_invited: '2023-02-02T08:29:00.000Z',
      date_registered: '2021-10-01T05:26:01.000Z',
      last_login: '2022-12-27T18:37:18.000Z',
      status_id: 2,
      type_id: 0,
    },
    {
      id: 49,
      sub_cognito_id: 'BC326E1A-C4E3-835E-A5E9-517CAF91778B',
      name: 'Porter Torres',
      phone: '(251) 747-3475',
      email: 'erat@protonmail.ca',
      pay_rate: 37,
      home_address: '712-1152 Feugiat Rd.',
      created_at: '2022-03-24T05:00:00.000Z',
      creator_user_id: '6E270167-8C6D-24EE-CEFD-7A6206F65CAA',
      updated_at: '2023-02-17T05:00:00.000Z',
      modifier_user_id: '6FC82421-7144-AA7D-AA92-2488C1A9027B',
      date_invited: '2022-08-25T05:40:49.000Z',
      date_registered: '2021-04-28T15:16:12.000Z',
      last_login: '2022-11-10T01:54:30.000Z',
      status_id: 2,
      type_id: 4,
    },
    {
      id: 50,
      sub_cognito_id: '6B25D942-DF5C-DE40-5017-3618498E1C56',
      name: 'Thane Hayes',
      phone: '1-589-345-1755',
      email: 'mattis.semper@hotmail.edu',
      pay_rate: 27,
      home_address: 'P.O. Box 222, 338 Dictum. St.',
      created_at: '2023-01-09T05:00:00.000Z',
      creator_user_id: 'E6A2D814-C58D-F751-3043-A9D37468CB91',
      updated_at: '2022-07-01T05:00:00.000Z',
      modifier_user_id: '68248B8E-2405-D6D6-AC65-CE96AA9BA8F8',
      date_invited: '2023-02-17T03:34:38.000Z',
      date_registered: '2022-05-01T05:29:42.000Z',
      last_login: '2021-04-13T01:39:23.000Z',
      status_id: 0,
      type_id: 2,
    },
    {
      id: 51,
      sub_cognito_id: 'D1E21E6B-2831-787A-486D-A7DCD597925B',
      name: 'Dustin Jarvis',
      phone: '1-446-513-1678',
      email: 'mattis.integer.eu@google.net',
      pay_rate: 37,
      home_address: 'Ap #649-3036 Eu Ave',
      created_at: '2021-07-27T05:00:00.000Z',
      creator_user_id: 'DF5E466D-624A-5C51-ECB0-EB8F27C26895',
      updated_at: '2022-06-04T05:00:00.000Z',
      modifier_user_id: 'BEA8DB35-1A3C-2AD7-BCDF-84BE9227A7FD',
      date_invited: '2023-01-07T09:51:10.000Z',
      date_registered: '2023-02-11T15:43:46.000Z',
      last_login: '2021-12-30T09:20:05.000Z',
      status_id: 6,
      type_id: 6,
    },
    {
      id: 52,
      sub_cognito_id: '7D11A534-94A6-11B8-6D89-1D68A5CC8289',
      name: 'Eric Mullen',
      phone: '1-535-968-1528',
      email: 'nunc.risus@protonmail.edu',
      pay_rate: 24,
      home_address: '419-6575 Aliquam Avenue',
      created_at: '2022-08-05T05:00:00.000Z',
      creator_user_id: '54296806-18CA-E0DC-A633-2B1907F27B93',
      updated_at: '2021-12-31T05:00:00.000Z',
      modifier_user_id: 'E7C62097-40D7-0C3B-2963-CC735CE59418',
      date_invited: '2022-07-29T03:28:39.000Z',
      date_registered: '2021-10-08T11:07:16.000Z',
      last_login: '2021-12-07T08:18:01.000Z',
      status_id: 1,
      type_id: 8,
    },
    {
      id: 53,
      sub_cognito_id: 'DE9EB38A-5FA9-A9C4-2932-13386518A2C4',
      name: 'Blaze Blackburn',
      phone: '1-594-747-3336',
      email: 'lobortis.tellus@hotmail.edu',
      pay_rate: 22,
      home_address: 'Ap #267-4196 Dapibus Rd.',
      created_at: '2022-10-09T05:00:00.000Z',
      creator_user_id: 'EAFB4978-3136-B2F7-B48E-0F7E4544BDCC',
      updated_at: '2022-05-09T05:00:00.000Z',
      modifier_user_id: '64DDB4AE-59AD-D764-BF8C-E4AD66B98280',
      date_invited: '2021-06-29T05:19:50.000Z',
      date_registered: '2021-07-26T14:45:49.000Z',
      last_login: '2022-12-31T09:09:43.000Z',
      status_id: 5,
      type_id: 3,
    },
    {
      id: 54,
      sub_cognito_id: 'B4B5FC31-76B1-1E06-DAC7-37AC3396AC2A',
      name: 'Nathan Wagner',
      phone: '(182) 254-2545',
      email: 'erat.volutpat.nulla@icloud.net',
      pay_rate: 36,
      home_address: 'P.O. Box 234, 614 Dignissim Road',
      created_at: '2022-01-20T05:00:00.000Z',
      creator_user_id: '1D6D67D1-DD78-E264-DD2B-5F548DE473AB',
      updated_at: '2022-11-27T05:00:00.000Z',
      modifier_user_id: 'DD2740B4-7DEE-7B13-5B78-AA134A3CCBB2',
      date_invited: '2022-09-30T04:31:45.000Z',
      date_registered: '2021-10-15T15:44:13.000Z',
      last_login: '2022-04-12T20:49:29.000Z',
      status_id: 3,
      type_id: 3,
    },
    {
      id: 55,
      sub_cognito_id: 'D1E4EE06-8727-7855-4853-6387E1D5BE56',
      name: 'Quinn Steele',
      phone: '1-632-845-3556',
      email: 'ipsum.non.arcu@yahoo.couk',
      pay_rate: 23,
      home_address: 'P.O. Box 377, 9569 Ante St.',
      created_at: '2021-11-10T05:00:00.000Z',
      creator_user_id: '4D26EE12-C852-9095-5FFA-D716CEEAA1F0',
      updated_at: '2022-03-31T05:00:00.000Z',
      modifier_user_id: '782D83B2-AFD3-712D-4723-6A2DB16D4FFD',
      date_invited: '2021-08-29T05:14:02.000Z',
      date_registered: '2022-12-23T10:54:23.000Z',
      last_login: '2023-01-16T01:07:03.000Z',
      status_id: 9,
      type_id: 7,
    },
    {
      id: 56,
      sub_cognito_id: '9DADF1E1-485E-2DBE-75BD-68C71E2B29CB',
      name: 'Myra Mclean',
      phone: '(644) 455-5245',
      email: 'pede.et@hotmail.net',
      pay_rate: 28,
      home_address: '976-4283 Augue, Road',
      created_at: '2023-02-14T05:00:00.000Z',
      creator_user_id: 'D853D934-1E57-7491-8D71-F78B8B523997',
      updated_at: '2021-05-31T05:00:00.000Z',
      modifier_user_id: '9015901B-9822-1A34-8E9A-827A88574D65',
      date_invited: '2022-02-10T08:11:02.000Z',
      date_registered: '2021-05-25T22:17:36.000Z',
      last_login: '2021-04-24T02:24:00.000Z',
      status_id: 2,
      type_id: 2,
    },
    {
      id: 57,
      sub_cognito_id: '4DB87726-1B3E-5442-A765-A8611B2D980B',
      name: 'Abra Shannon',
      phone: '(521) 474-6102',
      email: 'enim@aol.ca',
      pay_rate: 36,
      home_address: 'Ap #356-3490 Malesuada St.',
      created_at: '2023-01-24T05:00:00.000Z',
      creator_user_id: 'B72AF583-0D37-1E37-1516-91951C732E41',
      updated_at: '2021-03-29T05:00:00.000Z',
      modifier_user_id: '8EC148C0-C1A1-A87E-0404-429186C2E66E',
      date_invited: '2022-07-17T10:45:58.000Z',
      date_registered: '2023-02-28T07:34:06.000Z',
      last_login: '2021-09-03T07:30:59.000Z',
      status_id: 6,
      type_id: 2,
    },
    {
      id: 58,
      sub_cognito_id: '44E6E06D-13C9-607F-04FD-DBA0B037E8DE',
      name: 'Graham Miles',
      phone: '1-506-166-0305',
      email: 'lacus.ut.nec@aol.org',
      pay_rate: 23,
      home_address: '7482 Tortor. Av.',
      created_at: '2021-05-05T05:00:00.000Z',
      creator_user_id: 'B023CF29-37C7-5BE6-5410-12958BF7A1C9',
      updated_at: '2022-02-15T05:00:00.000Z',
      modifier_user_id: '2D86C9BC-5499-39A7-A9CC-6EDE72B36E77',
      date_invited: '2021-06-14T09:47:42.000Z',
      date_registered: '2021-06-12T00:14:36.000Z',
      last_login: '2021-03-09T08:01:51.000Z',
      status_id: 2,
      type_id: 8,
    },
    {
      id: 59,
      sub_cognito_id: '6F57B6E6-435B-3DBB-A3C8-D662DEC83CAF',
      name: 'Maggie Bradley',
      phone: '1-431-615-8845',
      email: 'vel.faucibus@aol.com',
      pay_rate: 25,
      home_address: 'Ap #135-5353 A, Ave',
      created_at: '2021-06-28T05:00:00.000Z',
      creator_user_id: '1906A5C6-9AC0-28F9-739A-9C24F12D26D4',
      updated_at: '2022-02-22T05:00:00.000Z',
      modifier_user_id: '83C0F6F6-6989-E41B-C784-92B4A66C895B',
      date_invited: '2021-08-21T01:52:50.000Z',
      date_registered: '2022-12-05T18:56:33.000Z',
      last_login: '2022-04-29T09:58:30.000Z',
      status_id: 0,
      type_id: 7,
    },
    {
      id: 60,
      sub_cognito_id: 'D8F07B6B-E8D1-A506-B6E5-1C1E9CBA9436',
      name: 'Orson Vargas',
      phone: '1-718-730-7873',
      email: 'aliquet.libero@google.net',
      pay_rate: 39,
      home_address: '977-8849 Condimentum. Avenue',
      created_at: '2022-05-28T05:00:00.000Z',
      creator_user_id: 'A753AAAE-A24E-752D-1AB5-BC6B16418D3A',
      updated_at: '2022-10-24T05:00:00.000Z',
      modifier_user_id: '823BDED3-AEB4-FA0A-DE82-ED4C2951A2EC',
      date_invited: '2022-04-14T12:12:21.000Z',
      date_registered: '2021-03-16T22:52:47.000Z',
      last_login: '2022-10-06T17:28:45.000Z',
      status_id: 3,
      type_id: 3,
    },
  ];

  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      for (let status of this.status) {
        if (await await connection.getRepository(User).findOne(status)) {
          continue;
        }
        await connection
          .createQueryBuilder()
          .insert()
          .into(User)
          .values(status)
          .execute();
      }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        console.log('There is no need to create the user');
      } else {
        throw new Error(error.message);
      }
    }
  }
}